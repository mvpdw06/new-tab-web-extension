const protocol = 'https://'
const google = `${protocol}www.google.com`
const facebook = `${protocol}www.facebook.com`
const instagram = `${protocol}www.instagram.com`
const twitter = `${protocol}www.twitter.com`
const trello = `${protocol}www.trello.com`

const gitRepository = `${protocol}github.com/mvpdw06/new-tab-web-extension`

const urlProvider = key => {
  switch (key) {
    case 'myRepository':
      return gitRepository
    case 'Goolge':
      return google
    case 'Facebook':
      return facebook
    case 'Instagram':
      return instagram
    case 'Twitter':
      return twitter
    case 'Trello':
      return trello
  }
}

module.exports = urlProvider
