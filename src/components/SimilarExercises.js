import React from 'react'
import { Box, Typography, Stack } from "@mui/material"
import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from './Loader'

const SimilarExercises = ({targetMuscle, equipmentExercises}) => {
  return (
    <Box sx={{
      mt: {lg: "100px", xs: "0"}
    }}
    >
      <Typography variant="h3" mb={5} >
        Exercises that target the same Muscle Group
      </Typography>
      <Stack direction="row" position="relative" >
        {targetMuscle.length? 
          <HorizontalScrollbar data={targetMuscle} /> : <Loader/>
        }
      </Stack>
      
      <Typography variant="h3" mb={5} >
        Exercises that use the same Equipment
      </Typography>
      <Stack direction="row" position="relative" >
        {equipmentExercises.length? 
          <HorizontalScrollbar data={equipmentExercises} /> : <Loader/>
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises