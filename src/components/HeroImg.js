import React from 'react'
import {withStyles} from '@material-ui/core/styles/index'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import PropTypes from 'prop-types'
// const hacker = require('../mp34/hacker.jpg')
// const cracker = require('../mp34/Crackers.jpg')
const moon = require('../mp34/original.gif')

const styles = theme => ({
  card: {
    maxWidth: '100%'
  },
  heroImageSm: theme.imgSize.heroImageSm
})

class HeroImg extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    isMobile: PropTypes.bool
  }

    render () {
      const {classes, isMobile} = this.props
      return (
          <a name='Home'>
              <img
                src={moon}
                alt={'#moon'}
                key={'moon'}
                style={isMobile
                  ? {height: classes.heroImageSm, width: '100%'} : {
                    height: classes.heroImageLg,
                    width: '100%'
                  }
                }
              />
          </a>
      )
    }
}

export default withStyles(styles)(HeroImg)
