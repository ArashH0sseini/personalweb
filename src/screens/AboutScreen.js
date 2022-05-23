import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import Title from '../components/Title'
import { getTranslate, lang } from '../localization/index'
import MainImage from '../assets/images/about.jpg'
import MainImageRtl from '../assets/images/about2.jpg'
import Services from '../components/Services'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';

export default function AboutScreen() {
  const translate = getTranslate()
  return (
    <Grid justify="flex-start" alignItems='flex-start' container className="min-h-screen">
      <Grid className='px-8 pt-16 w-full' item container xs={12}>
        <Title title={translate.aboutme} />
        <Grid container item direction='row'>
          <Grid item xs={12} md={6} className="z-10">
            {
              lang === 'fa' ?
                <img src={MainImageRtl} className='w-full' alt={translate.name} />
                :
                <img src={MainImage} className='w-full' alt={translate.name} />

            }
          </Grid>
          <Grid item xs={12} md={6} className={lang === 'fa' ? 'my-4 md:my-0 mdd:px-10 text-right' : 'my-4 md:my-0 mdd:px-5 text-left'}>
            <Typography variant='h3'>{translate.hi}
              <span className='text-primaryColor'>
                {translate.name}</span>
              {translate.hi2}
            </Typography>
            <Typography variant='body1' className='mt-2'>
              {translate.desc}
            </Typography>
            <Typography variant='body1' style={{ marginTop: 10 }}>
              <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.fullname}</b>
              {' : '}
              {translate.name}
            </Typography>
            <Typography variant='body1' style={{ marginTop: 5 }}>
              <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.age}</b>
              {' : '}
              22 {translate.years}
            </Typography>
            <Typography variant='body1' style={{ marginTop: 5 }}>
              <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.nationality}</b>
              {' : '}
              {translate.iranian}
            </Typography>
            <Typography variant='body1' style={{ marginTop: 5 }}>
              <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.languages}</b>
              {' : '}
              {translate.persian}, {translate.english}
            </Typography>
            <Typography variant='body1' style={{ marginTop: 5 }}>
              <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.phone}</b>
              {' : '}
              (+98) 93899244550
            </Typography>
            <div className='flex mt-5'>
              <Button variant="contained" color="primary">
                {translate.DownloadCv}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid className='px-8 pt-16 w-full mb-10' item container xs={12}>
        <Title title={translate.services} />
        <Grid container item direction='row'>
          <Services
            icon={<WebIcon color="action" className='text-primaryColor text-4xl' />}
            title={translate.WebDesign} desc={translate.ServicesDesc} />
          <Services
            icon={<CodeIcon color="action" className='text-primaryColor text-4xl' />}
            title={translate.WebDevelopment} desc={translate.ServicesDesc} />
          <Services
            icon={<PhoneAndroidIcon color="action" className='text-primaryColor text-4xl' />}
            title={translate.WebApplication} desc={translate.ServicesDesc} />
        </Grid>
      </Grid>
    </Grid>
  )
}
