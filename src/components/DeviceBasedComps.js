import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
import DeviceType from './DeviceType'
import App from '../App'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'

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

export class DeviceBasedComps extends Component {
    static propTypes = {
      isDesktop: PropTypes.bool,
      isMobile: PropTypes.bool,
      isTablet: PropTypes.bool
    }

    render () {
      return (
        <MuiThemeProvider theme={theme}>
          <DeviceType>
            <App />
          </DeviceType>
        </MuiThemeProvider>
      )
    }
}

export default DeviceBasedComps
