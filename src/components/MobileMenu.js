import React from 'react'
import Footer from './Footer'
import SwipableDrawer from './SwipableDrawer'

class MobileMenu extends React.Component {
  render () {
    return (
      <React.Fragment>
        <SwipableDrawer menu={this.props.menu} />
        {/* <Footer headerMenu {...this.props} /> */}
      </React.Fragment>
    )
  }
}

export default MobileMenu
