import React, {createRef} from 'react'
import ScrolledAppBar from './components/ScrolledAppBar'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import Content from './components/Content'
import Footer from './components/Footer'
import SocialMediaIcons from './components/SocialMediaIcons'
import HeroImg from './components/HeroImg'
import WeText from './components/WeText'
// import MobileMenu from './components/MobileMenu'
import DeviceType from './components/DeviceType'
import SwipableDrawer from './components/SwipableDrawer'
// import Check from './components/Check'
import SnackBar from './components/SnackBar'

import {
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#000000',
      dark: '#000000',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff79b0',
      main: '#fff',
      dark: '#c60055',
      contrastText: '#000'
    },
    openTitle: indigo['400'],
    protectedTitle: pink['400'],
    type: 'light'
  },
  typography: {
    h4: {
      color: '#fff'
    },
    textColor: '#fff',
    fontFamily: [
      'Mono, Semi-Mono',
      'Book Inktrap, Book, Medium'
    ].join(',')
  },
  appBackgroundColor: {
    backgroundColor: '#000'
  },
  imgSize: {
    heroImageSm: '63vh',
    heroImageLg: 800
  }
})

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
      return (
        <MuiThemeProvider theme={theme}>
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
        </MuiThemeProvider>
      )
    }
}

export default App
