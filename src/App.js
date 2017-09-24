import React, { PureComponent } from 'react'
import Input from 'material-ui/Input'
import {
  google,
  facebook,
  instagram,
  twitter,
  trello,
  gitRepository
} from './url'

const isChromeExt = typeof chrome !== 'undefined' && chrome.extension

const githubImg = isChromeExt
  ? chrome.extension.getURL('/assets/github.png')
  : require('./images/github.png')
const facebookImg = isChromeExt
  ? chrome.extension.getURL('/assets/facebook.png')
  : require('./images/facebook.png')
const instagramImg = isChromeExt
  ? chrome.extension.getURL('/assets/instagram.png')
  : require('./images/instagram.png')
const twitterImg = isChromeExt
  ? chrome.extension.getURL('/assets/twitter.png')
  : require('./images/twitter.png')
const trelloImg = isChromeExt
  ? chrome.extension.getURL('/assets/trello.png')
  : require('./images/trello.png')

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      dataList: [],
      search: ''
    }
  }

  componentDidMount() {
    this.getDataList()
  }

  getDataList = () => {
    const self = this
    isChromeExt
      ? chrome.bookmarks.getTree(tree => {
          const data = tree[0].children[0].children.filter(data => {
            return data.children && data.title === 'Quick'
          })
          self.setState({
            dataList: data[0].children
          })
        })
      : fetch('./fakeData.json')
          .then(resp => resp.json())
          .then(data => self.setState({ dataList: data }))
          .catch(err => console.log(`fetch fake data error!`))
  }

  isFolder = ({ children }) => {
    return children && children.length > 0
  }

  renderList = data => {
    return this.isFolder(data)
      ? <div className="group">
          <h3>
            {data.title}
          </h3>
          {data.children.map(childData => this.renderList(childData), this)}
        </div>
      : <ul>
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

  handleSearchValueChange = ({ target: { value } }) => {
    this.setState({ search: value })
  }

  handleSearchKeyPress = e => {
    const { search } = this.state
    if (e.key === 'Enter' && search)
      window.location.href = `${google}/search?q=${search}`
  }

  quickIconRedirect = key => {
    let url
    switch (key) {
      case 'facebook':
        url = facebook
        break
      case 'instagram':
        url = instagram
        break
      case 'twitter':
        url = twitter
        break
      case 'trello':
        url = trello
        break
    }

    if (url) window.location.href = url
  }

  render() {
    const { dataList, search } = this.state
    return (
      <div className="container">
        <div className="title">
          <h1>Hi, Ryan</h1>
          <p>Where you want to go?</p>
          <a href={gitRepository} title="Fork me on GitHub">
            <img className="git-logo" src={githubImg} />
          </a>
        </div>

        <div className="quickPanel">
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                title="Facebook"
                onClick={() => this.quickIconRedirect('facebook')}
              >
                <img className="quickIcon" src={facebookImg} />
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                title="Instagram"
                onClick={() => this.quickIconRedirect('instagram')}
              >
                <img className="quickIcon" src={instagramImg} />
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                title="Twitter"
                onClick={() => this.quickIconRedirect('twitter')}
              >
                <img className="quickIcon" src={twitterImg} />
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                title="Trello"
                onClick={() => this.quickIconRedirect('trello')}
              >
                <img className="quickIcon" src={trelloImg} />
              </a>
            </li>
          </ul>
          <Input
            value={this.state.search}
            onChange={e => this.handleSearchValueChange(e)}
            className="searchInput"
            onKeyPress={e => this.handleSearchKeyPress(e)}
            placeholder="Search something?"
            autoFocus={true}
          />
        </div>

        <div className="content">
          {this.filterBookmarks(search, dataList).map(
            data => this.renderList(data),
            this
          )}
        </div>
      </div>
    )
  }
}

module.exports = App
