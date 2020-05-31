import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
const one = require('../mp34/Gallery/1.jpg')
const two = require('../mp34/Gallery/2.jpg')
const three = require('../mp34/Gallery/3.jpg')
const four = require('../mp34/Gallery/4.jpg')
const five = require('../mp34/Gallery/5.jpg')
const six = require('../mp34/Gallery/6.jpg')
const seven = require('../mp34/Gallery/7.jpg')
const eight = require('../mp34/Gallery/8.jpg')
const nine = require('../mp34/Gallery/9.jpg')
const ten = require('../mp34/Gallery/10.jpg')
const eleven = require('../mp34/Gallery/11.jpg')
const twelve = require('../mp34/Gallery/12.jpg')
const thirteen = require('../mp34/Gallery/13.jpg')
// const fourteen = require('../mp34/Gallery/14.jpg')

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    border: '5px solid #FFFFFF',
    marginRight: '40px',
    marginLeft: '40px'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: '#FFFFFF'
  },
  titleBar: {
    background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
}))

const tileData = [
  {
    img: one,
    title: 'Image',
    author: 'author'
  },
  {
    img: two,
    title: 'Image',
    author: 'author'
  },
  {
    img: three,
    title: 'Image',
    author: 'author'
  },
  {
    img: four,
    title: 'Image',
    author: 'author'
  },
  {
    img: five,
    title: 'Image',
    author: 'author'
  },
  {
    img: six,
    title: 'Image',
    author: 'author'
  },
  {
    img: seven,
    title: 'Image',
    author: 'author'
  },
  {
    img: eight,
    title: 'Image',
    author: 'author'
  },
  {
    img: nine,
    title: 'Image',
    author: 'author'
  },
  {
    img: ten,
    title: 'Image',
    author: 'author'
  },
  {
    img: eleven,
    title: 'Image',
    author: 'author'
  },
  {
    img: twelve,
    title: 'Image',
    author: 'author'
  },
  {
    img: thirteen,
    title: 'Image',
    author: 'author'
  }
]

export default function SingleLineGridList () {
  const classes = useStyles()

  return (
    <div style={{paddingTop: window.innerHeight * 0.10, marginBottom: window.innerHeight * 0.20}}>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  )
}
