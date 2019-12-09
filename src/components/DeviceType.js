import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class DeviceType extends Component {
  static propTypes = {
    children: PropTypes.node
  }

    state = {
      isMobile: false,
      isTablet: false,
      isDesktop: false
    }

    makeMediaQueries=() => {
      const isMobile = window.matchMedia('(max-width:639px)').matches
      const isTablet = window.matchMedia('(min-width:640px) and (max-width:1024px)').matches
      const isDesktop = window.matchMedia('(min-width:1025px)').matches
      this.setState({
        isMobile,
        isTablet,
        isDesktop
      })
    }

    componentDidMount () {
      this.makeMediaQueries()
      window.addEventListener('resize', this.makeMediaQueries)
    }

    componentWillUnmount () {
      window.removeEventListener('resize', this.makeMediaQueries)
    }

    render () {
      return React.Children.map(this.props.children, (eachChild) => {
        return React.cloneElement(eachChild, this.state, null)
      })
    }
}

export default DeviceType
