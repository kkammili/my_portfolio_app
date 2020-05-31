import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Home from '@material-ui/icons/Home'
import History from '@material-ui/icons/History'
import Work from '@material-ui/icons/Work'
import Computer from '@material-ui/icons/Computer'
import EmojiPeople from '@material-ui/icons/EmojiPeople'
// import InsertDrive from '@material-ui/icons/InsertDriveFile'
import Contact from '@material-ui/icons/Person'
import PropTypes from 'prop-types'

const styles = () => ({
  root: {backgroundColor: 'black'},
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

export class SwipeableTemporaryDrawer extends React.Component {
    static propTypes = {
      classes: PropTypes.object,
      toggleDrawer: PropTypes.func,
      menu: PropTypes.bool
    }
    render () {
      const {classes} = this.props
      return (
        <div>
          <SwipeableDrawer
            open={this.props.menu}
            onClose={this.props.toggleDrawer('left', false)}
            onOpen={this.props.toggleDrawer('left', true)}
          >
            <div
              className={classes.list}
              role='presentation'
              onClick={this.props.toggleDrawer('left', false)}
              onKeyDown={this.props.toggleDrawer('left', false)}
            >
              <List>

                <ListItem button key={'Home'}>
                  <a
                    style={{color: 'inherit', textDecoration: 'none', display: 'flex'}}
                    href={'#Home'}
                  >
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText primary={'Home'} />
                  </a>
                </ListItem>

                <ListItem button key={'Story'}>
                  <a
                    style={{color: 'inherit', textDecoration: 'none', display: 'flex'}}
                    href={'#My Story'}
                  >
                    <ListItemIcon><History /></ListItemIcon>
                    <ListItemText primary={'My Story'} />
                  </a>
                </ListItem>

                <ListItem button key={'My Work'}>
                  <a
                    style={{color: 'inherit', textDecoration: 'none', display: 'flex'}}
                    href={'#My Work'}
                  >
                    <ListItemIcon><Work /></ListItemIcon>
                    <ListItemText primary={'My Work'} />
                  </a>
                </ListItem>

                <ListItem button key={'Computer'}>
                  <a
                    style={{color: 'inherit', textDecoration: 'none', display: 'flex'}}
                    href={'#My Tech'}
                  >
                    <ListItemIcon><Computer /></ListItemIcon>
                    <ListItemText primary={'My Tech'} />
                  </a>
                </ListItem>

                <ListItem button key={'My Hobbies'}>
                  <a
                    style={{color: 'inherit', textDecoration: 'none', display: 'flex'}}
                    href={'#My Hobbies'}
                  >
                    <ListItemIcon><EmojiPeople /></ListItemIcon>
                    <ListItemText primary={'My Hobbies'} />
                  </a>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button key={'Contact Me'}>
                  {/* has to add snackbar */}
                  <ListItemIcon><Contact /></ListItemIcon>
                  <ListItemText primary={'Contact Me'} />
                </ListItem>
              </List>
            </div>
          </SwipeableDrawer>
        </div>
      )
    }
}

export default withStyles(styles)(SwipeableTemporaryDrawer)
