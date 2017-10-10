import React from 'react'
import PropTypes from 'prop-types'

const BookmarkList = ({ filterBookmarks, search, dataList, renderList }) =>
  <div className="content">
    {filterBookmarks(search, dataList).map(data => renderList(data))}
  </div>

BookmarkList.propTypes = {
  filterBookmarks: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  dataList: PropTypes.array.isRequired,
  renderList: PropTypes.func.isRequired
}

module.exports = BookmarkList
