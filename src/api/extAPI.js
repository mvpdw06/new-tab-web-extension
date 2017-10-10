export const extBookMarkAPI = () =>
  new Promise((resolve, reject) => {
    chrome.bookmarks.getTree(tree => {
      resolve(tree)
    })
  })

export const extStorageSetAPI = (key, value) => {
  localStorage.setItem(key, value)
}

export const extStorageGetAPI = key => {
  return localStorage.getItem(key)
}
