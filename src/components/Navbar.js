import React from 'react'
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material'

import Logo from '../assets/images/Logo.png'
import { borderBottom } from '@mui/system';

const Navbar = () => {
  return (
    <Stack>
      <Link to='/'>
        <img src={Logo} alt="logo" style={{width:'48px', height:'48px', margin:'0 20px'}} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fonSize="24px"
        alignItems="flex-end"
      >
        <Link to='/' style={{textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #FF2625'}}>Home</Link>
        <a href="#exercices" style={{textDecoration:'none',color:'#3A1212'}}>Exercices</a>
    </Stack>
    </Stack>

  ) 
}

export default Navbar