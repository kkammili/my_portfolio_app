import React from 'react'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Spacing from './Spacing'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  card: {
    maxWidth: '100%',
    backgroundColor: theme.palette.primary.main
  }
})

class ContentAligner extends React.Component {
    static propTypes = {
      classes: PropTypes.object,
      heading: PropTypes.string,
      paragraph: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      media: PropTypes.string,
      isMobile: PropTypes.bool
    }
    render () {
      const {classes} = this.props
      return (
        <React.Fragment>
          <Spacing />
          {this.props.isMobile && (
            <Card className={classes.card}>
              <CardActionArea>
                <Container maxWidth={'xl'} color={'#000'}>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height={250}
                    width={'60%'}
                    image={this.props.media}
                    title='Contemplative Reptile'
                  />
                </Container>

                <Grid container>
                  <Grid item xs={1} />
                  <Grid item xs={10}>

                    <CardContent className={classes.card}>
                      <Typography gutterBottom variant='h5' component='h2' color={'secondary'}>
                        {this.props.heading}
                      </Typography>
                      <Typography variant='body2' component='p' color={'secondary'}>
                        {this.props.paragraph}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={1} />
                </Grid>

              </CardActionArea>
            </Card>
          )}
        </React.Fragment>
      )
    }
}

export default withStyles(styles)(ContentAligner)
