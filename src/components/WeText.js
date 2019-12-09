import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

const WeText = ({isMobile}) => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            align={'center'}
            color={'secondary'}
          >
                  Passion to enrich the human experience through the
                  thoughtful application of design and technology
            <span>{'\u2728'}</span>
          </Typography>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Container>
  )
}

WeText.propTypes = {
  isMobile: PropTypes.bool
}

export default WeText
