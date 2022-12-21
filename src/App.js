import React from 'react'

//import HOOKS
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material';

//import CSS
import './App.css'

const App = () => {
  return (
    <Box width="400">
      Navbar
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/exercice/:id' element={<ExerciceDetail />}/> */}
      </Routes>
    </Box>
  )
}

export default App