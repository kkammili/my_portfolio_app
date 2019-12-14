import React, {Fragment} from 'react'
import ContentAligner from './ContentAligner'
import paragraph1, {paragraph2, paragraph3, paragraph4} from './Paragraphs'
const UISImg = require('../mp34/UISImg.jpg')
const C2Img = require('../mp34/ClearC2Img.png')
// const ReactJS = require('../mp34/React.jpg')
const MNEW = require('../mp34/MernNew.png')
const hobbies = require('../mp34/hobbies.png')

const Content = (props) => {
  return (
    <Fragment>
      <a name='My Story'>
        <ContentAligner
          heading={'UIS'}
          paragraph={paragraph1}
          media={UISImg}
          {...props}
        />
      </a>
      <a name='My Work'>
        <ContentAligner
          heading={'CLEAR C2'}
          paragraph={paragraph2}
          media={C2Img}
          {...props}
        />
      </a>
      <a name='My Tech'>
        <ContentAligner
          heading={'MERN'}
          paragraph={paragraph3}
          media={MNEW}
          {...props}
        />
      </a>
      <a name='My Hobbies'>
        <ContentAligner
          heading={'HOBBIES'}
          paragraph={paragraph4}
          media={hobbies}
          {...props}
        />
      </a>
    </Fragment>
  )
}

export default Content
