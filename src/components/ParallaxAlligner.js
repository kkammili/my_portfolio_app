import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Parallax from './Parallax'

import paragraph1, {paragraph2, paragraph3, paragraph4} from './Paragraphs'
const UIS = require('../mp34/editeduis.png')
const C2Img = require('../mp34/editedClearC2Img.png')
const MNEW = require('../mp34/editedmernNew.png')
const hobbies = require('../mp34/editedHobbies.png')
// const mern = require('../mp34/mern.jpg')

export class ParallaxAlligner extends Component {
  static propTypes = {
    loginId: PropTypes.string
  }

  render () {
    return (
      <Fragment>
        <a name='My Story'>
          <Parallax
            image={UIS}
            heading={'UIS'}
            textColor={'#FFD662FF'}
            headingColor={'#FFD662FF'}
            imageAligned={'left'}
            paragraph={paragraph1}
          />
        </a>
        <a name='My Work'>
          <Parallax
            image={C2Img}
            heading={'ClearC2 Inc'}
            textColor={'#FFFFFF'}
            headingColor={'#FFFFFF'}
            imageAligned={'right'}
            paragraph={paragraph2}
          />
        </a>
        <a name='My Tech'>
          <Parallax
            image={MNEW}
            heading={'MERN'}
            textColor={'#4CB346'}
            headingColor={'#4CB346'}
            imageAligned={'left'}
            paragraph={paragraph3}
          />
        </a>
        <a name='My Hobbies'>
          <Parallax
            image={hobbies}
            heading={'HOBBIES'}
            textColor={'#00bfff'}
            headingColor={'#00bfff'}
            imageAligned={'right'}
            paragraph={paragraph4}
          />
        </a>
      </Fragment>
    )
  }
}

export default ParallaxAlligner
