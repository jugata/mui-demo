import React from 'react'
import Grid from '@material-ui/core/Grid';
import colorData from './utils/colorData'
import OutlinedCard from './OutlinedCard'

export default function CardContainer() {

  return (
    <Grid container spacing={10}>

      {colorData.map(data => <Grid item xs={6} key={data.id}><OutlinedCard color={data} /></Grid>)}

    </Grid>
  )
}
