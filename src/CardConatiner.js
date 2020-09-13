import React from 'react'
import Grid from '@material-ui/core/Grid';
import colorData from './utils/colorData'
import OutlinedCard from './OutlinedCard'

export default function CardConatiner() {

  return (
    <Grid container spacing={6}>

      {colorData.map(data => <Grid item xs={6}><OutlinedCard color={data} /></Grid>)}

    </Grid>
  )
}
