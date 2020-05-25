import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Parallax from './Parallax'
const UIS = require('../mp34/editeduis.png')

// import paragraph1, {paragraph2, paragraph3, paragraph4} from './Paragraphs'
// const C2Img = require('../mp34/ClearC2Img.png')
// const ReactJS = require('../mp34/React.jpg')
// const MNEW = require('../mp34/MernNew.png')
// const hobbies = require('../mp34/hobbies.png')
// const mern = require('../mp34/mern.jpg')

export class ParallaxAlligner extends Component {
  static propTypes = {
    loginId: PropTypes.string
  }

  render () {
    return (
      <Fragment>
        <Parallax
          image={UIS}
          paragraph={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                ' Consequatur harum natus, odit repudiandae rerum saepe? A ad aliquid assumenda, earum, facere' +
                ' molestiae necessitatibus officia, quas quidem saepe ullam unde! Incidunt!'}
        />
      </Fragment>
    )
  }
}

export default ParallaxAlligner
