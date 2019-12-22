import React, {Fragment} from 'react'
import {withStyles} from '@material-ui/core/styles/index'
import PropTypes from 'prop-types'
import Play from '@material-ui/icons/PlayCircleOutline'
import Pause from '@material-ui/icons/PauseCircleOutline'
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
    progress: 0,
    pause: false
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
            pause:false,
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
            id={'#hero'}
            alt={'#hero Image'}
            key={'hero'}
            style={{height: '55vh', width: '100%'}}
          />
        </a>

        <div className={classes.bgColor} style={{paddingTop: 20}} />
        <Grid className={classes.bgColor} container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <div id={0} onClick={(e) => this.handleProgressClick(e)} className={'barOutlined'}>
                {
                  this.state.pause ? (
                    <div id={0} className={'fullBar'} />
                  ) : (
                    <div id={0} className={(this.state.progress === 0) ? 'fill' : null} />
                  )
                }
              </div>

              <div id={1} onClick={(e) => this.handleProgressClick(e)} className={'barOutlined'}>
                {
                  this.state.pause ? (
                    <div id={1} className={'fullBar'} />
                  ) : (
                    <div id={1} className={(this.state.progress === 1) ? 'fill' : null} />
                  )
                }
              </div>

              <div id={2} onClick={(e) => this.handleProgressClick(e)} className={'barOutlined'}>
                {
                  this.state.pause ? (
                    <div id={2} className={'fullBar'} />
                  ) : (
                    <div id={2} className={(this.state.progress === 2) ? 'fill' : null} />
                  )
                }
              </div>
            </div>
          </Grid>
          <Grid item xs={2} />
        </Grid>

        <div
          className={classes.bgColor}
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 10
          }}
          onClick={() => {
            if (!this.state.pause) {
              clearInterval(this.progressTimer)
              this.setState({pause: true})
            } else {
              this.setState({pause: false})
              this.startTimer()
            }
          }}
        >
          {!this.state.pause && (
            <Play style={{color: 'white', height:30, width:30}} />
          )}
          {this.state.pause && (
            <Pause style={{color: 'white', height:30, width:30}} />
          )}
        </div>

      </Fragment>

    )
  }
}

export default withStyles(styles)(HeroImg)
