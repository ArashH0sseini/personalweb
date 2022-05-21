import React from 'react'
import { getTranslate } from '../localization/index'
import {Typography} from '@mui/material'
export default function Index() {
    const translate = getTranslate()
  return (
    <div>
      <Typography variant='body1'>
        {translate.name}
      </Typography>
    </div>
  )
}
