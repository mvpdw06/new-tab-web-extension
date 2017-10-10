import { isChromeExt } from 'Config/detectConfig'

const githubImg = isChromeExt
  ? chrome.extension.getURL('/assets/github.png')
  : require('Image/github.png')
const facebookImg = isChromeExt
  ? chrome.extension.getURL('/assets/facebook.png')
  : require('Image/facebook.png')
const instagramImg = isChromeExt
  ? chrome.extension.getURL('/assets/instagram.png')
  : require('Image/instagram.png')
const twitterImg = isChromeExt
  ? chrome.extension.getURL('/assets/twitter.png')
  : require('Image/twitter.png')
const trelloImg = isChromeExt
  ? chrome.extension.getURL('/assets/trello.png')
  : require('Image/trello.png')

const imageProvider = key => {
  switch (key) {
    case 'Github':
      return githubImg
    case 'Facebook':
      return facebookImg
    case 'Instagram':
      return instagramImg
    case 'Twitter':
      return twitterImg
    case 'Trello':
      return trelloImg
  }
}

module.exports = imageProvider
