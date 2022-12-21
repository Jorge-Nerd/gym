import React from 'react'

//import HOOKS
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material';

//import CSS
import './App.css'
import Navbar from './components/Navbar'
import ExerciceDetail from './pages/ExerciceDetail'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <Box width="400px" sx={{width:'1488px'}} m="auto" >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercice/:id' element={<ExerciceDetail />}/>
      </Routes>
      <Footer />
    </Box>
  )
}

export default App