import React, {createRef, Fragment} from 'react'
import ScrolledAppBar from './components/ScrolledAppBar'
import Content from './components/Content'
import Footer from './components/Footer'
import SocialMediaIcons from './components/SocialMediaIcons'
import HeroImg from './components/HeroImg'
import WeText from './components/WeText'
import DeviceType from './components/DeviceType'
import SwipableDrawer from './components/SwipableDrawer'
// import Check from './components/Check'
import SnackBar from './components/SnackBar'
import PropTypes from 'prop-types'
import ParallaxAlligner from '../src/components/ParallaxAlligner'
import SingleGridList from '../src/components/SingleGridList'
const face = require('../src/mp34/Face.jpg')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.scrolledAppBarRef = createRef()
    this.state = {
      menu: false,
      snackBar: false,
      horizontal: 'center',
      vertical: 'bottom',
      message: '',
      barType: 'warning'
    }
  }

  static propTypes = {
    isDesktop: PropTypes.bool,
    isMobile: PropTypes.bool,
    isTablet: PropTypes.bool
  }

    handleMenu=() => {
      this.setState({menu: !this.state.menu})
    }

    handleSnackBar=(bool, position, message, barType) => {
      if (bool) {
        this.setState({
          snackBar: bool,
          horizontal: position.horizontal || '',
          vertical: position.vertical || '',
          message,
          barType
        })
      } else {
        this.setState({
          snackBar: bool
        })
      }
    }

    toggleDrawer = (side, open) => event => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return
      }

      this.setState({menu: open})
    };

    render () {
      if (!this.props.isDesktop) {
        return (
          <Fragment>
            <DeviceType>
              <ScrolledAppBar ref={this.scrolledAppBarRef} menu={this.state.menu} handleMenu={this.handleMenu} />
              <SwipableDrawer toggleDrawer={this.toggleDrawer} menu={this.state.menu} />
              <HeroImg />
              <WeText />
              <Content />
              <Footer
                scrolledAppBarRef={this.scrolledAppBarRef}
                handleSnackBar={this.handleSnackBar}
                handleMenu={this.handleMenu}
              />
              <SocialMediaIcons />
              <SnackBar
                handleSnackBar={this.handleSnackBar}
                open={this.state.snackBar}
                horizontal={this.state.horizontal}
                vertical={this.state.vertical}
                message={this.state.message}
                barType={this.state.barType}
              />
            </DeviceType>
          </Fragment>

        )
      } else {
        return (
          <Fragment>
            <ScrolledAppBar
              ref={this.scrolledAppBarRef}
              menu={this.state.menu}
              handleMenu={this.handleMenu}
              handleSnackBar={this.handleSnackBar}
            />
            <div className={'container'} style={{backgroundColor: 'black'}}>
              <img
                id={'#hero'}
                style={{
                  width: window.innerWidth,
                  height: window.innerHeight * 0.90,
                  scrollSnapAlign: 'start'

                }}
                src={face}
              />
              <ParallaxAlligner />
              <div style={{height: window.innerHeight}}>
                <DeviceType>
                  <SingleGridList />

                  <SnackBar
                    handleSnackBar={this.handleSnackBar}
                    open={this.state.snackBar}
                    horizontal={this.state.horizontal}
                    vertical={this.state.vertical}
                    message={this.state.message}
                    barType={this.state.barType}
                  />
                  <Footer
                    scrolledAppBarRef={this.scrolledAppBarRef}
                    handleSnackBar={this.handleSnackBar}
                    handleMenu={this.handleMenu}
                  />
                  <SocialMediaIcons />

                </DeviceType>
              </div>
            </div>
          </Fragment>
        )
      }
    }
}

export default App
