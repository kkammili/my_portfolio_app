import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

export class Parallax extends Component {
  static propTypes = {
    paragraph: PropTypes.string,
    image: PropTypes.string,
    imageAligned: PropTypes.string,
    headingColor: PropTypes.string,
    textColor: PropTypes.string,
    heading: PropTypes.string
  }

  render () {
    return (
      <div style={{position: 'relative', bottom: 15}}>
        <div
          style={{
            backgroundImage: `url(${this.props.image})`,
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            fontFamily: 'Times,serif',
            fontSize: 17,
            color: 'white',
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            display: 'flex'
          }}
        >
          {this.props.imageAligned === 'right' && (
            <Fragment>
              <div style={{width: window.innerWidth * 0.30, color: this.props.textColor, height: window.innerHeight}}>
                <div style={{display: 'flex', alignItems: 'center', height: window.innerHeight}}>
                  <div style={{marginLeft: 30, textAlign: 'justify'}}>
                    <span style={{fontSize: 30, color: this.props.headingColor, textDecoration: 'underline'}}>
                      {this.props.heading}
                    </span>
                    <br />
                    <span>
                      {this.props.paragraph.split(' ').map((item, index) => {
                        if (item === '/n') {
                          return (
                            <Fragment key={item + index}>
                              <br />
                              <br />
                            </Fragment>
                          )
                        } else {
                          return <span key={item + index}>{item + ' '}</span>
                        }
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{width: window.innerWidth * 0.70}} />
            </Fragment>
          )}
          {this.props.imageAligned === 'left' && (
            <Fragment>
              <div style={{width: window.innerWidth * 0.70}} />
              <div style={{width: window.innerWidth * 0.30, color: this.props.textColor, height: window.innerHeight}}>
                <div style={{display: 'flex', alignItems: 'center', height: window.innerHeight}}>
                  <div style={{marginRight: 30, textAlign: 'justify'}}>
                    <span style={{fontSize: 30, color: this.props.headingColor, textDecoration: 'underline'}}>
                      {this.props.heading}
                    </span>
                    <br />
                    {this.props.paragraph.split(' ').map((item, index) => {
                      if (item === '/n') {
                        return (
                          <Fragment key={item + index}>
                            <br />
                            <br />
                          </Fragment>
                        )
                      } else {
                        return <span key={item + index}>{item + ' '}</span>
                      }
                    })}
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}

export default Parallax
