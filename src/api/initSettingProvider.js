import { extStorageGetAPI } from 'API/extAPI'

const initData = {
  userName: 'Ryan',
  selectFolder: 'Quick'
}

const initSettingProvider = async () => {
  const userName = await extStorageGetAPI('userName')
  const selectFolder = await extStorageGetAPI('selectFolder')

  if (!userName || !selectFolder) {
    return initData
  }

  return {
    userName,
    selectFolder
  }
}

module.exports = initSettingProvider
