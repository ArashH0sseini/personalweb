import React from 'react'
import { TextField } from '@mui/material'

export default function TextFieldContact({label,multiline}) {
  return (
    <>
        <TextField
                className='mt-6'
                size="medium"
                fullWidth
                required
                label={label}
                variant='outlined'
                multiline={multiline}
                rows={5}
              />
    </>
  )
}
