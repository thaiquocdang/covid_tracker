import React from 'react'
import styles from './Cards.module.css'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup';
import cx from 'classnames'

const Cards = (props) => {

  console.log(props, 'Cards props');
  const data = props.data;
  
  if(!data){
    return 'loading,,,'
  }

  
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp start = {0} end = {data.confirmed.value} duration = {2.5} separator ="," />
            </Typography>
            <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of active case from COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end= {data.recovered.value} duration = {2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
            <Typography variant="h5">
              <CountUp start={0} end= {data.deaths.value} duration = {2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of deaths cause by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>

    </div>
  )
  
}

export default Cards;