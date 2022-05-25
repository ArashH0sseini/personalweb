import React from 'react'
import { Grid } from '@mui/material'
import Title from '../components/Title'
import { getTranslate } from '../localization/index'
import Portfolio from '../components/Portfolio'

export default function PortfolioScreen() {
  const translate = getTranslate()
  return (
    <div className='min-h-screen w-full px-[10px] sm:p-7 pt-16'>
      <Title title={translate.portfolios} />
      <Grid item xs={12} container direction="row" justify="flex-start" alignItems="center" >
        {
          translate.portfoliosList.map((portfolio) => 
            <Portfolio key={portfolio.id} 
            title={portfolio.title} 
            subtitle={portfolio.subtitle} 
            href="https://reactdeveloper.ir" 
            image={portfolio.image} />
          )
        }
      </Grid>
    </div>
  )
}
