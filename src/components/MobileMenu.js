import React from 'react'
import Footer from './Footer'

class MobileMenu extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Footer headerMenu {...this.props} />
      </React.Fragment>
    )
  }
}

export default MobileMenu
