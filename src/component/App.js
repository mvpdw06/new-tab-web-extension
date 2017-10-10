import React, { PureComponent } from 'react'
import urlProvider from 'Config/urlProvider'

import Title from 'App/Title'
import SettingPanel from 'App/SettingPanel'
import BookmarkList from 'App/BookmarkList'
import QuickPanel from 'App/QuickPanel'

import imageProvider from 'Config/imageProvider'

import dataProvider from 'API/dataProvider'
import initSettingProvider from 'API/initSettingProvider'
import { extStorageSetAPI } from 'API/extAPI'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      selectFolder: '',
      settingOpen: false,
      dataList: [],
      folderList: [],
      search: ''
    }
  }

  componentDidMount = async () => {
    await this.getInitSetting()
    await this.getDataList(this.state.selectFolder)
  }

  getInitSetting = async () => {
    const { userName, selectFolder } = await initSettingProvider()

    this.setState({
      userName,
      selectFolder
    })
  }

  getDataList = async selectFolder => {
    const { dataList, folderList } = await dataProvider(selectFolder)

    this.setState({
      dataList,
      folderList
    })
  }

  isFolder = ({ children }) => {
    return children && children.length > 0
  }

  renderList = data => {
    return this.isFolder(data)
      ? <div className="group" key={data.id}>
          <h3>
            {data.title}
          </h3>
          {data.children.map(childData => this.renderList(childData), this)}
        </div>
      : <ul key={data.id}>
          <li>
            <a href={data.url}>
              {data.title}
            </a>
          </li>
        </ul>
  }

  filterBookmarks = (search, data) => {
    return data.filter(eachData => {
      return eachData.title.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
  }

  handleSearchKeyPress = event => {
    const { search, dataList } = this.state
    if (event.key === 'Enter' && search) {
      let url
      const filterData = this.filterBookmarks(search, dataList)
      if (filterData.length > 0) {
        url = filterData[0].url
        if (filterData[0].children) {
          url = filterData[0].children[0].url
        }
      } else {
        const google = urlProvider('Google')
        url = `${google}/search?q=${search}`
      }

      window.location.href = url
    }
  }

  handleSettingClose = ({ userName, selectFolder }) => {
    this.setState({
      userName,
      selectFolder,
      settingOpen: false
    })

    extStorageSetAPI('userName', userName)
    extStorageSetAPI('selectFolder', selectFolder)

    this.getDataList(selectFolder)
  }

  handleSettingOpen = () => this.setState({ settingOpen: true })

  handleSearchChange = ({ target: { value } }) =>
    this.setState({ search: value })

  render() {
    const {
      dataList,
      search,
      userName,
      settingOpen,
      folderList,
      selectFolder
    } = this.state

    return (
      <div className="container">
        <Title
          gitRepository={urlProvider('myRepository')}
          gitImg={imageProvider('Github')}
          userName={userName}
        />
        <QuickPanel
          search={search}
          handleSearchChange={this.handleSearchChange}
          handleSearchKeyPress={this.handleSearchKeyPress}
        />
        <BookmarkList
          filterBookmarks={this.filterBookmarks}
          search={search}
          dataList={dataList}
          renderList={this.renderList}
        />
        <SettingPanel
          handleSettingOpen={this.handleSettingOpen}
          settingOpen={settingOpen}
          onRequestClose={this.handleSettingClose}
          userName={userName}
          selectFolder={selectFolder}
          folderList={folderList}
        />
      </div>
    )
  }
}

module.exports = App
