import { isChromeExt, isFirefox } from 'Config/detectConfig'
import { extBookMarkAPI } from 'API/extAPI'

const getMockData = async selectFolder => {
  let data = []
  try {
    const response = await fetch('./mockData.json')
    data = await response.json()
  } catch (error) {
    throw `Fetch mock data error!, ${error}`
  }
  const filterResult = filterSelectFolderData(
    data[0].children[0].children,
    selectFolder
  )
  return filterResult
}

const getBookmarkData = async selectFolder => {
  let data = []
  try {
    data = await extBookMarkAPI()
  } catch (error) {
    throw `Fetch bookmarks error!, ${error}`
  }

  const filterResult = isFirefox
    ? filterSelectFolderData(data[0].children[1].children, selectFolder)
    : filterSelectFolderData(data[0].children[0].children, selectFolder)

  return filterResult
}

const filterSelectFolderData = (data, selectFolder) => {
  let folderList = []
  const filterData = data.filter(data => {
    if (data.children) folderList.push(data.title)
    return data.children && data.title === selectFolder
  })

  if (filterData.length === 0) {
    return {
      dataList: [],
      folderList
    }
  }

  return {
    dataList: filterData[0].children,
    folderList
  }
}

const dataProvider = async selectFolder => {
  const data = isChromeExt
    ? await getBookmarkData(selectFolder)
    : await getMockData(selectFolder)

  return data
}

module.exports = dataProvider
