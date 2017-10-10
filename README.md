# 瀏覽器新分頁套件

## 使用套件

- React
- Material-UI
- Material-design-icons

## 字型

- [Noto Sans](https://fonts.google.com/specimen/Noto+Sans)

## 使用方法

右下角設定按鈕，可以設定「名稱」與「呈現資料夾」，預設為 Ryan 與 Quick。

## 預設快速連結

- Facebook
- Instagram
- Twitter
- Trello

## 輸入搜尋

> 預設自動 focus (目前會被 URL 列搶走，待處理)

### 輸入文字

自動過濾畫面上書籤

### 按下 Enter

1. 若有過濾出書籤，預設打開第一個書籤
2. 若找不到，則自動轉到 Google 頁面搜尋

## todos

1. 過濾打散所有 bookmarks (不一定會做... 現在這樣也很好用)
2. 可調整預設快速連結

## Bug fix

- **2017/09/25** CSS 無法正確顯示所有書籤問題
- **2017/09/26** Firefox web-extension 無法正確找到
- **2017/10/10** 完成設定功能，拆分元件與 API、Storage 處理、font 檔處理、Icon 更新