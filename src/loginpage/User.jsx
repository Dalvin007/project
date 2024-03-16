import { Button, TextField } from '@mui/material'
import React from 'react'

export const User = () => {
  return (
    <div  style={{paddingTop:"80px"}}>
    
    <h1>Registration File</h1>
    <br/>
    
    <TextField variant='filled'  label='Name'></TextField>
    <br/>
    
    <TextField variant='filled' label='Username'></TextField>
    <br/>
    
    <TextField variant='filled' type='password' label='password'></TextField> 
    <br/>

    <TextField variant='filled' type='password' label='confirm Password'></TextField> 
    <br/>

    <TextField variant='filled' type='Email' label='Email'></TextField> 
    <br/>

    <TextField variant='filled' type='number' label='phone no'></TextField> 
    <br/>
         
     <Button style={{color:'white',backgroundColor:'brown'}} variant='contained'>REGISTER</Button>
    
    </div>
  )
}
