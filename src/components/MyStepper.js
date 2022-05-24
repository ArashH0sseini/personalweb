import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { StepConnector } from '@mui/material';
import { lang } from '../localization/index'
import './MyStepper.css';

export default function MyStepper({steps}) {
  return (
    <Box className='w-full'>
      <Stepper className="items-start" connector={<StepConnector className='stepconnector' />} orientation="vertical">
        {steps.map((step) => step.id >= 0 ? (
          <Step active={true} key={step.id}>
            <StepLabel classes={{ label: ' flex flex-col justify-center items-start sm:flex-row sm:justify-start sm:items-center px-0' }} className='p-0' icon={<span className='w-4 h-4 rounded-full border-[5px] border-solid border-borderColor mx-[5px] px-0' />} >
              <Typography className={lang === 'fa' ? 'w-52 text-right' : 'w-52 text-left'} variant='h6'>{step.date}</Typography>
              <span className='hidden sm:block w-8 h-[1px] bg-borderColor mx-4 px-0'></span>
              <Typography className='text-primaryColor ' variant='h5'>{step.title}</Typography>
            </StepLabel>
            <StepContent className='border-l-[3px] border-l-solid border-l-borderColor mt-0'>
              <div className='flex pt-4'>
                <div className={lang==='fa'? 'hidden sm:block w-[295px]': 'hidden sm:block w-[275px]'}></div>
                <div className='flex flex-1 flex-col justify-start items-start'>
                  <Typography variant='h6'>{step.subtitle}</Typography>
                  <Typography variant='body1'>{step.content}</Typography>
                </div>
              </div>
            </StepContent>
          </Step>
        ) : step.id === -1 || -2 ? (
          <Step active={true} key={step.id}>
            <StepLabel icon={<span className='bg-white px-0' />} ></StepLabel>
          </Step>
        ) : (null)
        )}
      </Stepper>
    </Box>
  );
}
