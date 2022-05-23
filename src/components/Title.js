import React from 'react'
import { Typography } from '@mui/material'
import './Title.css'
import {lang} from '../localization/index'

export default function AboutTitle({title}) {
  return (
    <div className='relative mb-[60px] h-[75px] w-full'>
      {
        lang === 'fa' ?
        <div>
            <Typography className='title-rtl' variant='h2'>{title}</Typography>
            <span className='text-[4.5rem] absolute right-4 top-full leading-4 font-black text-[rgba(25,29,43,.44)] inline-block -z-10 translate-y-[-40%]'>{title}</span>
        </div>
        :
        <div>
            <Typography className='title' variant='h2'>{title}</Typography>
            <span className='text-[4.5rem] absolute left-4 top-full leading-4 font-black text-[rgba(25,29,43,.44)] inline-block -z-10 translate-y-[-40%]'>{title}</span>
        </div>
      }
    </div>
  )
}
