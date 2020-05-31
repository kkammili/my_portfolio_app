import React, {Fragment} from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

class TransitionMenuButtons extends React.Component {
    static propTypes = {
      children: PropTypes.node,
      menu: PropTypes.bool,
      handleMenu: PropTypes.func,
      handleSnackBar: PropTypes.func,
      scrolledAppBarRef: PropTypes.object,
      isDesktop: PropTypes.bool,
      setMenuHiding: PropTypes.func
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
                children === 'Contact Me' ? 'tel:+1-469-569-6257'
                  : `#${this.props.children}`
              }
              onClick={() => {
                if (this.props.scrolledAppBarRef) {
                  this.props.scrolledAppBarRef.current.setMenuHiding(false)
                } else if (this.props.setMenuHiding) {
                  this.props.setMenuHiding(false)
                }

                if (this.props.children === 'Contact Me') {
                  const copy = '+1-469-569-6257'
                  if (copy) {
                    const el = document.createElement('textarea')
                    el.value = copy
                    el.setAttribute('readonly', '')
                    el.style.position = 'absolute'
                    el.style.left = '-9999px'
                    document.body.appendChild(el)
                    el.select()
                    document.execCommand('copy')
                    document.body.removeChild(el)
                    const position = {horizontal: 'center', vertical: 'bottom'}
                    const message = `Copied contact info to clipboard 😁😁`
                    const barType = 'success'
                    this.props.handleSnackBar(true, position, message, barType)
                  }
                }
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
