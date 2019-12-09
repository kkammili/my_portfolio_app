import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import PropTypes from 'prop-types'

const styles = (theme) => ({
  spaceStyles: {
    backgroundColor: theme.appBackgroundColor.backgroundColor
  }
})

class Spacing extends Component {
    static propTypes = {
      classes: PropTypes.object
    }
    render () {
      const {classes} = this.props
      return (
        <Container className={classes.spaceStyles}>
          <br />
          <br />
          <br />
        </Container>
      )
    }
}

export default withStyles(styles)(Spacing)
