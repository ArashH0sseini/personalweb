import React from 'react'
import { Grid, Typography,Button } from '@mui/material'
import Title from '../components/Title'
import { getTranslate, lang } from '../localization/index'
import './ContactScreen.css'
import TextField from '../components/TextFieldContact'
import Contact from '../components/Contact'
import CallIcon from '@mui/icons-material/CallOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import RoomIcon from '@mui/icons-material/RoomOutlined';


export default function AboutScreen() {
  const translate = getTranslate()
  return (
    <Grid justify="flex-start" alignItems='flex-start' container className="min-h-screen">
      <Grid className='p-[10px] sm:px-8 pt-16 w-full' item container xs={12}>
        <Title title={translate.contactme} />
        <Grid container item direction='row'>
          <Grid item xs={12} md={6} className="z-10">
            <Typography variant='h4' className={lang === 'fa' ? 'text-right' : 'text-left'}>{translate.GetInTouch}</Typography>
            <div className='p-[10px]'>
              <TextField label={translate.enteryourname} multiline={false} />
              <TextField label={translate.enteryouremail} multiline={false} />
              <TextField label={translate.enteryoursubject} multiline={false} />
              <TextField label={translate.enteryourmessage} multiline={true} />
              <Button variant="contained" color="primary" size="large" className="mt-6 flex">{translate.send}</Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="p-[20px]">
            <Contact
            title={translate.phone}
            icon={<CallIcon color="action" className='text-[#a4acc4] text-4xl' />}
            text1="09389924550"
            text2="09103753764"
            />
            <Contact
            title={translate.email}
            icon={<EmailIcon color="action" className='text-[#a4acc4] text-4xl' />}
            text1="info@arashhosseini.ir"
            text2="Arashhosseini733@gmail.com"
            />
            <Contact
            title={translate.email}
            icon={<RoomIcon color="action" className='text-[#a4acc4] text-4xl' />}
            text1="Iran, Kerman"
            text2=""
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
