import React from 'react'
import {Grid} from '@mui/material'
import Title from '../components/Title'
import {getTranslate} from '../localization/index'

export default function AboutScreen() {
  const translate = getTranslate()
  return (
    <Grid container className="min-h-screen">
      <Grid className='px-8 pt-16 w-full' item container xs={12}>
        <Title title={translate.aboutme} />
      </Grid>
    </Grid>
  )
}
