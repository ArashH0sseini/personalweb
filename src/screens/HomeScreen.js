import { Typography, Grid } from '@mui/material'
import React from 'react'
import './home.css'
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { getTranslate } from '../localization/index'

export default function HomeScreen() {
  const translate = getTranslate()
  return (
    <>
      <div className='flex justify-center items-center h-screen w-full overflow-hidden '>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Grid>
          <Typography variant='h1'>{translate.hi} <span className='text-primaryColor'>{translate.name}</span>{translate.hi2}</Typography>
          <Typography variant='subtitle1'>
           {translate.desc}
          </Typography>
          <div className='mt-6'>
            <IconButton className='border-2 p-3 border-[#2e344e] border-solid mx-2 hover:border-primaryColor transition duration-150 ease-in-out'>
              <TelegramIcon color="action" className='text-[#a4acc4] hover:text-primaryColor' />
            </IconButton>
            <IconButton className='border-2 p-3 border-[#2e344e] border-solid mx-2 hover:border-primaryColor transition duration-150 ease-in-out'>
              <LinkedInIcon color="action" className='text-[#a4acc4] hover:text-primaryColor' />
            </IconButton>
            <IconButton className='border-2 p-3 border-[#2e344e] border-solid mx-2 hover:border-primaryColor transition duration-150 ease-in-out'>
              <InstagramIcon color="action" className='text-[#a4acc4] hover:text-primaryColor' />
            </IconButton>
          </div>
        </Grid>
      </div>
    </>
  )
}
