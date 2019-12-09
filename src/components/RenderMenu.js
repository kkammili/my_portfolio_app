import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types'

class RenderMenu extends React.Component {
    static propTypes = {
      menu: PropTypes.bool,
      handleMenu: PropTypes.func
    }
    render () {
      if (this.props.menu) {
        return <CloseIcon onClick={() => this.props.handleMenu()} />
      } else {
        return <MenuIcon onClick={() => {
          this.props.handleMenu()
          window.scrollTo(0, 0)
        }} />
      }
    }
}

export default RenderMenu
