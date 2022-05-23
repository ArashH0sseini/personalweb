import { LinearProgress, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'

export default function Skill({ value, title }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      if (val === value) {
        return
      }
      setVal(val => val + 5)
    }, 30)
  }, [val])

  return (
    <div className='w-full p-3 flex flex-col items-start'>
      <Typography variant='h6'>{title}</Typography>
      <div className='flex justify-start items-center w-full'>
        <Typography variant='body1'>{value}%</Typography>
        <LinearProgress className='w-[90%] mx-4 h-[6px] bg-borderColor' value={val} variant="determinate" color='primary'></LinearProgress>
      </div>
    </div>
  )
}
