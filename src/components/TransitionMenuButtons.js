import React, {Fragment} from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

class TransitionMenuButtons extends React.Component {
    static propTypes = {
      children: PropTypes.node,
      menu: PropTypes.bool,
      handleMenu: PropTypes.func,
      handleSnackBar: PropTypes.func
    }
    state={
      highlight: false
    }
    render () {
      const {children} = this.props
      return (
        <Fragment>
          <Button
            color='inherit'
            key={this.props.children}
            onMouseEnter={() => this.setState({
              highlight: true
            })}
            onMouseLeave={() => this.setState({
              highlight: false
            })}
          >
            {this.state.highlight && <span>[</span>}
           &nbsp;
            <a
              style={
                children === 'Contact'
                  ? {textDecoration: 'none', color: 'inherit', cursor: 'copy'}
                  : {textDecoration: 'none', color: 'inherit', cursor: 'pointer'}
              }
              href={
                children === 'My Resume'
                  ? 'https://drive.google.com/file/d/1sxMmCqo2arP66TwOA-6wuyVVPOsobYPf/view?usp=sharing'
                  : `#${this.props.children}`}
              target={children === 'My Resume' ? '_blank' : null}
              onClick={() => {
                // if (children === 'Contact Me') {
                //   const address = `15480 Dallas Pkwy, Dallas, TX 75248, Apt#2090, Ph: +1(469) 569-6257`
                //   navigator.clipboard.writeText(address)
                //     .then(() => {
                //       const position = {horizontal: 'center', vertical: 'bottom'}
                //       const message = `Copied to clipboard 😁😁`
                //       const barType = 'success'
                //       this.props.handleSnackBar(true, position, message, barType)
                //     })
                //     .catch(() => {
                //       const position = {horizontal: 'center', vertical: 'bottom'}
                //       const message = 'Something went wrong!!'
                //       const barType = 'warning'
                //       this.props.handleSnackBar(true, position, message, barType)
                //     })
                // }

                if (this.props.menu) {
                  this.props.handleMenu()
                }
              }}
            >
              {this.props.children}
            </a>
            &nbsp;
            {this.state.highlight && <span>]</span>}
          </Button>
        </Fragment>
      )
    }
}

export default (TransitionMenuButtons)
