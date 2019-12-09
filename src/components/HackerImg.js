import React from 'react'
import {withStyles} from '@material-ui/core/styles/index'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import PropTypes from 'prop-types'
const hacker = require('../mp34/hacker.jpg')
const cracker = require('../mp34/Crackers.jpg')

const styles = theme => ({
  card: {
    maxWidth: '100%'
  },
  heroImageSm: theme.imgSize.heroImageSm
})

class HackerImg extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    isMobile: PropTypes.bool
  }

    state = {
      image: false
    }

    // componentDidMount () {
    //   this.interval = setInterval(() => {
    //     this.setState({
    //       image: !this.state.image
    //     })
    //   }, 4000)
    // }

    // componentWillUnmount () {
    //   clearInterval(this.interval)
    // }

    render () {
      const {classes, isMobile} = this.props
      return (
        <Card key={'' + this.state.image} className={classes.card}>
          <a name='Home'>
            <CardMedia
              key={'' + this.state.image}
              className={(isMobile) ? classes.heroImageSm : classes.heroImageLg}
            >
              <img
                src={this.state.image ? cracker : hacker}
                key={'' + this.state.image}
                style={isMobile
                  ? {height: classes.heroImageSm, width: '100%'} : {
                    height: classes.heroImageLg,
                    width: '100%'
                  }
                }
              />
            </CardMedia>
          </a>
        </Card>
      )
    }
}

export default withStyles(styles)(HackerImg)
