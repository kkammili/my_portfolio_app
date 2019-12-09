import React, {Fragment} from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Instagram from '@material-ui/icons/Instagram'
import Youtube from '@material-ui/icons/YouTube'
// import Container from '@material-ui/core/Container'
import CopyRights from '@material-ui/icons/Copyright'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// import Spacing from './Spacing'

const SocialMediaIcons = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={6}>
              <Grid justify={'space-around'} container>
                <a
                  href={'https://m.facebook.com/kittu.krishna.krishnamraju'}
                  target={'_blank'}
                >
                  <FacebookIcon
                    style={{cursor: 'pointer'}}
                    color={'secondary'}
                  />
                </a>
                <a
                  href={'https://www.linkedin.com/in/krishnamraju-kammili-b27557150'}
                  target={'_blank'}
                >
                  <LinkedIn
                    style={{cursor: 'pointer'}}
                    color={'secondary'}
                  />
                </a>
                <a
                  href={'https://www.instagram.com/krishnamraju.kings/'}
                  target={'_blank'}
                >
                  <Instagram
                    style={{cursor: 'pointer'}}
                    color={'secondary'}
                  />
                </a>
                <a
                  href={'https://youtu.be/7LyN0AHX_p4'}
                  target={'_blank'}
                >
                  <Youtube
                    style={{cursor: 'pointer'}}
                    color={'secondary'}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <br />
      <Grid container direction={'row'} justify={'flex-end'}>
        <CopyRights color={'secondary'} />
        <Typography color={'secondary'}>
            &nbsp;Krishnamraju,&nbsp;Kammili.
        </Typography>
        <Grid item xs={1} />
      </Grid>
      <br />
      <br />
    </Fragment>
  )
}

export default SocialMediaIcons
