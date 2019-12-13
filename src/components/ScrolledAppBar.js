import React, {Component, Fragment} from 'react'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import PropTypes from 'prop-types'
import RenderMenu from './RenderMenu'
import TransitionMenuButtons from './TransitionMenuButtons'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: theme.palette.primary.light
  },
  appBar: {
    height: 120
  },
  appBarSm: {
    height: 90
  },
  toolbarMargin: theme.mixins.toolbar
})

class ScrolledAppBar extends Component {
      static propTypes = {
        classes: PropTypes.object,
        isMobile: PropTypes.bool,
        isTablet: PropTypes.bool,
        isDesktop: PropTypes.bool
      }

        state = {
          scrolling: 0,
          hiding:false,
          menuOpen: false
        };

        onScroll = () => {
          const currScrollPos = window.pageYOffset - 30
            if(this.state.scrolling < currScrollPos){
              !this.state.hiding && this.setState({hiding:true})
            }else{
                this.state.hiding && this.setState({hiding:false})
            }
            this.setState({scrolling: currScrollPos})
        };


        componentDidMount () {
          window.addEventListener('scroll', this.onScroll)
        }

        componentWillUnmount () {
          window.removeEventListener('scroll', this.onScroll)
        }

        render () {
          const {classes} = this.props
          return (
            <div className={classes.root}>
              <Fade in={!this.state.hiding}>
                <AppBar
                  color={classes.colorPrimary}
                  className={(this.props.isMobile) ? classes.appBarSm : classes.appBar}
                >
                  <Toolbar className={(this.props.isMobile) ? classes.appBarSm : classes.appBar}>
                    <Typography
                      variant='h4'
                      color='inherit'
                      className={classes.flex}
                    >
                          Portfolio
                    </Typography>
                    {(this.props.isTablet || this.props.isDesktop) && (
                      <Fragment>
                        <TransitionMenuButtons>
                                My Story
                        </TransitionMenuButtons>
                        <TransitionMenuButtons>
                                  My Work
                        </TransitionMenuButtons>
                        <TransitionMenuButtons>
                                  My Resume
                        </TransitionMenuButtons>
                      </Fragment>
                    )}
                    {(this.props.isMobile) && (
                      <Fragment>
                        <RenderMenu {...this.props} />
                      </Fragment>
                    )}
                  </Toolbar>
                </AppBar>
              </Fade>
              <div className={!this.state.scrolling ? classes.toolbarMargin : null} />
            </div>
          )
        }
}

export default withStyles(styles)(ScrolledAppBar)
