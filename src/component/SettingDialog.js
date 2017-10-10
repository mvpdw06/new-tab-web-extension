import React, { PureComponent } from 'react'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import Select from 'material-ui/Select'
import PropTypes from 'prop-types'
import { FormControl, FormHelperText } from 'material-ui/Form'

class SettingDialog extends PureComponent {
  constructor(props) {
    super(props)

    const { userName, selectFolder } = this.props

    this.state = {
      userName,
      selectFolder
    }
  }

  componentWillReceiveProps({ userName, selectFolder }) {
    this.setState({
      userName,
      selectFolder
    })
  }

  handleCancel = () => {
    const { onRequestClose, userName, selectFolder } = this.props

    onRequestClose({
      userName,
      selectFolder
    })
  }

  handleOk = () => {
    const { userName, selectFolder } = this.state

    this.props.onRequestClose({
      userName,
      selectFolder
    })
  }

  render() {
    const { userName, folderList, selectFolder, ...other } = this.props

    return (
      <Dialog ignoreBackdropClick ignoreEscapeKeyUp maxWidth="md" {...other}>
        <DialogTitle className="setting-title">Setting</DialogTitle>
        <DialogContent>
          <ul className="settings">
            <li>
              Your Name:
              <Input
                className="setting-item"
                value={this.state.userName}
                onChange={({ target: { value } }) =>
                  this.setState({ userName: value })}
                placeholder="Enter your name."
              />
            </li>
            <br />
            <li>
              <div>
                <form autoComplete="off">
                  Folder:
                  <FormControl className="setting-item">
                    <InputLabel htmlFor="folder">Folder</InputLabel>
                    <Select
                      value={this.state.selectFolder}
                      onChange={({ target: { value } }) =>
                        this.setState({ selectFolder: value })}
                      input={<Input id="folder" />}
                    >
                      {folderList.map(folder =>
                        <MenuItem key={folder} value={folder}>
                          {folder}
                        </MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </form>
              </div>
            </li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

SettingDialog.propTypes = {
  userName: PropTypes.string.isRequired,
  selectFolder: PropTypes.string.isRequired,
  folderList: PropTypes.array.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

module.exports = SettingDialog
