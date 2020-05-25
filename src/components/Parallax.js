import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Parallax extends Component {
  static propTypes = {
    paragraph: PropTypes.string,
    image: PropTypes.string
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
            color: 'white',
            fontSize: 36,
            display: 'flex'
          }}
        >
          <div style={{width: window.innerWidth * 0.70}} />
          <div style={{width: window.innerWidth * 0.30, display: 'flex', alignItems: 'center'}}>
            {this.props.paragraph}
          </div>
        </div>
      </div>
    )
  }
}

export default Parallax
