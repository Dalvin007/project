import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
    <AppBar>
    <Toolbar>
    <Typography>Login Page</Typography>&nbsp;
    <Button color='success' variant='contained'>
    <Link to={'login'} style={{textDecoration:"none", color:"white"}}>Login</Link></Button>&nbsp;
    <Button color='error' variant='contained'>
    <Link to={'/SignUp'} style={{textDecoration:"none", color:"white"}}>Sign Up</Link></Button>&nbsp;
    </Toolbar>
    </AppBar>
    </div>
  )
}
