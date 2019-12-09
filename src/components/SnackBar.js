import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import {withStyles} from '@material-ui/core/styles'
import clsx from 'clsx'
import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'
import IconButton from '@material-ui/core/IconButton'
import {Close} from '@material-ui/icons'
import WarningIcon from '@material-ui/icons/Warning'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}

const styles = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  margin: {
    margin: theme.spacing(1)
  }
})

export class SnackBar extends Component {
  static propTypes = {
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
    margin: PropTypes.object,
    open: PropTypes.bool,
    message: PropTypes.string,
    icon: PropTypes.object,
    success: PropTypes.object,
    iconVariant: PropTypes.object,
    handleSnackBar: PropTypes.func,
    barType: PropTypes.string
  }

  render () {
    const classes = this.props
    const Icon = variantIcon['success']
    return (
      <Snackbar
        anchorOrigin={{
          vertical: this.props.vertical,
          horizontal: this.props.horizontal
        }}
        open={this.props.open}
        onClose={() => this.props.handleSnackBar(false)}
      >
        <SnackbarContent
          className={clsx(classes.success, classes.margin)}
          style={
            this.props.barType === 'success'
              ? {backgroundColor: green[600]}
              : {backgroundColor: amber[700]}
          }
          aria-describedby='client-snackbar'
          message={
            <span id='client-snackbar' className={classes.message}>
              <Icon className={clsx(classes.icon, classes.iconVariant)} />
              {this.props.message}
            </span>
          }
          action={[
            <IconButton
              key='close'
              aria-label='close'
              color='inherit'
              onClick={() => this.props.handleSnackBar(false)}
            >
              <Close className={classes.icon} />
            </IconButton>
          ]}
        />
      </Snackbar>
    )
  }
}

export default withStyles(styles)(SnackBar)
