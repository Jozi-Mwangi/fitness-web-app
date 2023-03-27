import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Stack } from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card" >
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row" >
            <Button sx={{
                ml: "21px", color: "#fff", background: "#ffa9a9", fontSize: "14px",
                borderRadius: "20px", textTransform: "capitalize" 
            }} >
                {exercise.bodyPart}
            </Button>
            
            <Button sx={{
                ml: "21px", color: "#fff", background: "#fcc757", fontSize: "14px",
                borderRadius: "20px", textTransform: "capitalize" 
            }} >
                {exercise.targert}
            </Button>

            <Typography
             ml="21px" color="#000" fontWeight="bold" mt="110px" pb="10px" fontSize="22px" textTransform="capitalize" 
            >
                {exercise.name}
            </Typography>
        </Stack>
    </Link>
  )
}

export default ExerciseCard