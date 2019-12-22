import React, {Fragment} from 'react'
import {withStyles} from '@material-ui/core/styles/index'
import PropTypes from 'prop-types'
// import PlayArrowIcon from '@material-ui/icons/PlayArrowOutlined'
// import PauseArrowIcon from '@material-ui/icons/PauseCircleFilledOutlined'
import Grid from '@material-ui/core/Grid'
// const myPaint = require('../mp34/kittu.jpg')
const bird0 = require('../mp34/birds.jpg')
const bird1 = require('../mp34/birds1.jpg')
const bird2 = require('../mp34/birds2.jpg')

require('../CSS/Progress.css') //eslint-disable-line

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

  state={
    progress: 0
  }

  startTimer =() => {
    this.progressTimer = setInterval(() => {
      if (this.state.progress < 2) {
        this.setState({progress: this.state.progress + 1})
      } else {
        this.setState(({progress: 0}))
      }
    }, 5000)
  }

  componentDidMount () {
    this.startTimer()
  }

  componentWillUnmount () {
    clearInterval(this.progressTimer)
  }

    handleProgressClick=(e) => {
      clearInterval(this.progressTimer)
      this.startTimer()
      this.setState({
        progress: parseInt(e.target.id)
      })
    }

  birdsArray = [bird0, bird1, bird2]
  render () {
    const {classes} = this.props
    return (
      <Fragment>
        <a className={classes.bgColor} name='Home'>
          <img
            src={this.birdsArray[this.state.progress]}
            alt={'#myPaint'}
            key={'myPaint'}
            style={{height: '50vh', width: '100%'}}
          />
        </a>

        <div className={classes.bgColor} style={{paddingTop: 20}} />
        <Grid className={classes.bgColor} container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <div id={0} onClick={(e) => this.handleProgressClick(e)} className={'barOutlined'}>
                <div className={(this.state.progress === 0) ? 'fill' : null} />
              </div>

              <div id={1} onClick={(e) => this.handleProgressClick(e)} className={'barOutlined'}>
                <div className={(this.state.progress === 1) ? 'fill' : null} />
              </div>

              <div id={2} onClick={(e) => this.handleProgressClick(e)} className={'barOutlined'}>
                <div className={(this.state.progress === 2) ? 'fill' : null} />
              </div>
            </div>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Fragment>

    )
  }
}

export default withStyles(styles)(HeroImg)
