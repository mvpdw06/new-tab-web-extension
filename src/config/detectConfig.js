export const isChromeExt = typeof chrome !== 'undefined' && chrome.extension

export const isFirefox = window.navigator.userAgent.indexOf('Firefox') > -1
