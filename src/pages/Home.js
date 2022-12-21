import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/system'
import { Search } from '@mui/icons-material'

import HeroBanner from '../components/HeroBanner'
import SearchExercices from '../components/SearchExercices'
import Exercices from '../components/Exercices'

const Home = () => {
  return (
   
    <Box>Home IN 
      <HeroBanner />
      <SearchExercices />
      <Exercices />
    </Box>
  )
}

export default Home