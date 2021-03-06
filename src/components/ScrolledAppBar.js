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
        isDesktop: PropTypes.bool,
        handleSnackBar: PropTypes.func
      }

        state = {
          scrolling: 0,
          hiding: false,
          menuOpen: false
        };

        onScroll = () => {
          const currPos = document.getElementById('#hero').getBoundingClientRect().top
          if (currPos < 0) {
            const currScrollPos = window.pageYOffset
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

        setMenuHiding=(bool) => {
          this.setState({
            hiding: bool
          })
        }

        render () {
          const {classes} = this.props
          if (this.props.isMobile) {
            return (
              <div className={classes.appBarSm}>
                <a name='My Home' />
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
                  <a name='My Home' />
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
                        {(!this.props.isMobile) && (
                          <Fragment>
                            <TransitionMenuButtons setMenuHiding={this.setMenuHiding}>
                                  My Story
                            </TransitionMenuButtons>
                            <TransitionMenuButtons setMenuHiding={this.setMenuHiding}>
                                  My Work
                            </TransitionMenuButtons>
                            <TransitionMenuButtons setMenuHiding={this.setMenuHiding}>
                                  My Tech
                            </TransitionMenuButtons>
                            <TransitionMenuButtons setMenuHiding={this.setMenuHiding}>
                                  My Hobbies
                            </TransitionMenuButtons>
                            <TransitionMenuButtons
                              setMenuHiding={this.setMenuHiding}
                              handleSnackBar={this.props.handleSnackBar}
                            >
                                  Contact Me
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
