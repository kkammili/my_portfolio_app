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
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: theme.palette.primary.light
  },
  appBar: {
    height: 120
  },
  appBarSm: {
    height: 90,
    display: 'flex',
    justifyContent: 'space-between'
  },
  padRight: {
    paddingRight: '10px'
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
          hiding: false,
          menuOpen: false
        };

        onScroll = () => {
          const currPos = document.getElementById('#man').getBoundingClientRect().top
          if (currPos < 0) {
            const currScrollPos = window.pageYOffset - 30
            if (this.state.scrolling < currScrollPos) {
              !this.state.hiding && this.setState({hiding: true})
            } else {
              this.state.hiding && this.setState({hiding: false})
            }
            this.setState({scrolling: currScrollPos})
          }
        };

        componentDidMount () {
          window.addEventListener('scroll', this.onScroll)
        }

        componentWillUnmount () {
          window.removeEventListener('scroll', this.onScroll)
        }

        render () {
          const {classes} = this.props
          if (this.props.isMobile) {
            return (
              <div className={classes.appBarSm}>
                <Fade in={!this.state.hiding}>
                  <AppBar
                    color={classes.colorPrimary}
                    className={classes.appBarSm}
                  >
                    <Toolbar className={classes.appBarSm}>
                      <Fragment>
                        <RenderMenu {...this.props} />
                      </Fragment>
                      <Typography
                        variant='h5'
                        color='inherit'
                        className={classes.padRight}
                      >
                                            Portfolio
                      </Typography>
                    </Toolbar>
                  </AppBar>
                </Fade>
              </div>
            )
          } else {
            return (
              <div className={classes.root}>
                <div className={(this.props.isMobile) ? classes.appBarSm : classes.appBar}>
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
                </div>
              </div>
            )
          }
        }
}

export default withStyles(styles)(ScrolledAppBar)
