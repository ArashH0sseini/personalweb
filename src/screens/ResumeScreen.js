import React from 'react'
import { Grid, Typography } from '@mui/material'
import Title from '../components/Title'
import { getTranslate, lang } from '../localization/index'
import Skill from '../components/Skill'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MyStepper from '../components/MyStepper'

export default function ResumeScreen() {
  const translate = getTranslate()
  return (
    <Grid justify="flex-start" alignItems='flex-start' container className="min-h-screen">
      <Grid className='px-[5px] sm:px-8 pt-16 w-full' item container xs={12}>
        <Title title={translate.myskills} />
        <Grid container item direction='row'>
          <Grid item xs={12} md={6} className="z-10">
            <Skill value={100} title="HTML5" />
            <Skill value={100} title="CSS3" />
            <Skill value={85} title="JS" />
          </Grid>
          <Grid item xs={12} md={6} className={lang === 'fa' ? 'my-4 md:my-0 mdd:px-10 text-right' : 'my-4 md:my-0 mdd:px-5 text-left'}>
            <Skill value={70} title="React js" />
            <Skill value={60} title="Vue js" />
            <Skill value={80} title="Wordpress" />
          </Grid>
        </Grid>
      </Grid>
      <Grid className='px-[5px] sm:px-8 pt-16 w-full mb-10' item container xs={12}>
        <Title title={translate.resume} />
        <Grid container item direction='row' justify="flex-start" alignItems="center">
          <BusinessCenterIcon className='text-3xl' />
          <Typography className='mx-3' variant='h4'>
            {translate.WorkingExperience}
          </Typography>
        </Grid>
        <Grid container className='my-4'>
          <MyStepper steps={translate.workingSteps} />
        </Grid>

        <Grid container item direction='row' justify="flex-start" alignItems="center">
          <LocalLibraryIcon className='text-3xl' />
          <Typography className='mx-3' variant='h4'>
            {translate.EducationalQualifications}
          </Typography>
        </Grid>
        <Grid container className='my-4'>
          <MyStepper steps={translate.educationalSteps} />
        </Grid>
      </Grid>
    </Grid>
  )
}
