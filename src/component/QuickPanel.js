import React from 'react'
import PropTypes from 'prop-types'
import Input from 'material-ui/Input'

import QuickLinks from 'App/QuickLinks'

const QuickPanel = ({ search, handleSearchChange, handleSearchKeyPress }) =>
  <div className="quickPanel">
    <QuickLinks />
    <Input
      value={search}
      onChange={event => handleSearchChange(event)}
      className="searchInput"
      onKeyPress={event => handleSearchKeyPress(event)}
      placeholder="Search something?"
      autoFocus={true}
    />
  </div>

QuickPanel.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchKeyPress: PropTypes.func.isRequired
}

module.exports = QuickPanel
