import React, {Fragment} from 'react'
import Spacing from './Spacing'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import TransitionMenuButtons from './TransitionMenuButtons'
import PropTypes from 'prop-types'

const styles = (theme) => ({
  text: {
    color: theme.textColor
  },
  color: {
    color: theme.palette.primary.main
  },
  Grid: {
    height: 220
  },
  GridMenu: {
    height: '100%'
  }
})

class Footer extends React.Component {
    static propTypes = {
      classes: PropTypes.object,
      headerMenu: PropTypes.bool,
      menu: PropTypes.bool,
      handleMenu: PropTypes.func
    }

    state={
      scrollingY: false
    }

    scrolling=() => {
      const scrollingY = window.scrollY > 300
      if (this.props.menu && scrollingY && scrollingY !== this.state.scrollingY) {
        this.props.handleMenu()
      }
    }

    componentDidMount () {
      if (this.props.headerMenu) {
        window.addEventListener('scroll', this.scrolling)
      }
    }

    componentWillUnmount () {
      if (this.props.headerMenu) {
        window.removeEventListener('scroll', this.scrolling)
      }
    }

    items = ['My Home', 'My Story', 'My Work', 'My Tech', 'My Hobbies', 'My Resume', 'Contact Me']
    render () {
      const {classes} = this.props
      return (
        <Fragment>
          <div style={{backgroundColor: 'black'}}>
            <Spacing />
            <Grid style={this.props.headerMenu ? {height: '100vh'} : null} container>
              <Grid item xs={1} />
              <Grid container className={classes.Grid} alignContent={'space-between'} item xs={8}>
                {this.items.map(item => (
                  <Fragment key={item}>
                    <Grid item xs={6}>
                      <Typography color={'secondary'} className={classes.text}>
                        <TransitionMenuButtons {...this.props}>
                          {item}
                        </TransitionMenuButtons>
                      </Typography>
                    </Grid>
                    <Grid item xs={6} />
                  </Fragment>
                ))}
              </Grid>
              <Grid item xs={1} />
            </Grid>
            <Spacing />
          </div>
        </Fragment>
      )
    }
}

export default withStyles(styles)(Footer)
