import React from 'react'
import PropTypes from 'prop-types'

import SettingDialog from 'App/SettingDialog'

const SettingPanel = ({
  handleSettingOpen,
  settingOpen,
  onRequestClose,
  userName,
  selectFolder,
  folderList
}) =>
  <div>
    <i
      className="material-icons bigger float active"
      onClick={handleSettingOpen}
    >
      settings
    </i>
    <SettingDialog
      open={settingOpen}
      onRequestClose={onRequestClose}
      userName={userName}
      selectFolder={selectFolder}
      folderList={folderList}
    />
  </div>

SettingPanel.propTypes = {
  handleSettingOpen: PropTypes.func.isRequired
}

module.exports = SettingPanel
