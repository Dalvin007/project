
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'


export const Login = () => {
  return (
    <div style={{paddingTop:"80px"}}>
    <Typography variant='h3'>LOGINPAGE</Typography>
     <br/> 
    <TextField variant='filled'  label='Name'></TextField>
    <br/>
    <TextField variant='filled'  type='password' label='password'></TextField>
    <br/>
    <Button style={{color:'black'}} variant='contained'>Login</Button>
   
    </div>
  )
}
