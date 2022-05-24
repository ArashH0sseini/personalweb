import React from 'react'
import { Grid, Typography } from '@mui/material'
import { lang } from '../localization/index'


export default function Services({ title, text1, text2, icon }) {
    return (
        <div className="w-full mt-5">
            <Grid container justify="flex-start" alignItems='center' direction='row' className="border-[1px] border-solid border-borderColor bg-siderbarBg p-8 border-t-[5px] border-t-solid border-t-borderColor transition-all duration-300 ease-in-out hover:border-t-primaryColor">
                <div className='m-[10px] mx-5 p-[10px] border-[1px] border-solid border-borderColor'>
                    {icon}
                </div>
                <div className='flex flex-1 flex-col'>
                    <Typography before="" variant='h6' className={lang === 'fa' ? 'text-right':'text-left' }>
                        {title}
                    </Typography>
                    <Typography className='cursor-pointer hover:text-primaryColor' variant='body1'>
                        {text1}
                    </Typography>
                    <Typography className='cursor-pointer transition-all ease-in-out delay-300 hover:text-primaryColor' variant='body1'>
                        {text2}
                    </Typography>
                </div>
            </Grid>
        </div>
    )
}
