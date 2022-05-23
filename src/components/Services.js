import React from 'react'
import { Grid, Typography } from '@mui/material'
import {lang} from '../localization/index'


export default function Services({ title, desc,icon }) {
    return (
        <Grid item lg={4} md={6} xs={12} className="px-4 mt-5">
            <Grid container alignItems='flex-start' direction='column' className="border-[1px] border-solid border-borderColor bg-siderbarBg p-8 border-t-[5px] border-t-solid border-t-borderColor transition-all duration-300 ease-in-out hover:border-t-primaryColor">
                {icon}
                <Typography before="" variant='h5' className={lang === 'fa' ? 'mt-4 relative pb-4 before:content-[attr(before)] before:absolute before:right-0 before:top-auto before:bottom-0 before:h-[2px] before:w-12 before:bg-borderColor' : 'mt-4 relative pb-4 before:content-[attr(before)] before:absolute before:left-0 before:top-auto before:bottom-0 before:h-[2px] before:w-12 before:bg-borderColor'}>
                    {title}
                </Typography>
                <Typography className='mt-4' variant='body1'>
                    {desc}
                </Typography>
            </Grid>
        </Grid>
    )
}
