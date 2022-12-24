import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'

const ExerciceCard = ({exercice,key}) => {
  return (
    <Link className='exercise-card' to={`/exercice/${exercice.id}`}>
        <img src={exercice.gifUrl} alt="exercice.name" key={key} loading='lazy'/>
    <Stack direction='row'>
        <Button className='btn-bodyPart' sx={{ml:'auto',mr:'auto', color:'#fff', background:'#FFA9A9', fontSize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
            {exercice.bodyPart}
        </Button>
        <Button className='btn-target' sx={{ml:'auto',mr:'auto', color:'#fff', background:'#FCC757', fontSize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
            {exercice.target}
        </Button>
    </Stack>
    <Typography sx={{ml:'auto', mr:'auto', color:'Grey', fontWeight:'bold'}}>
        {exercice.name.toUpperCase()}
    </Typography>
    </Link>
  )
}

export default ExerciceCard ;