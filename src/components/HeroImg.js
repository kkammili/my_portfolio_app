import React from 'react'
import {withStyles} from '@material-ui/core/styles/index'
import PropTypes from 'prop-types'
const man = require('../mp34/darkbetta.jpeg')

const styles = theme => ({
  card: {
    maxWidth: '100%'
  },
  bgColor: {backgroundColor: theme.appBackgroundColor.backgroundColor},

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
      <div style={{borderTop: '2px solid #19B2FF', borderBottom: '2px solid #19B2FF'}}>
        <a className={classes.bgColor} name='Home'>
          <img
            src={man}
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
      </div>
    )
  }
}

export default withStyles(styles)(HeroImg)
