import React, { useState } from 'react'
import { Box } from '@mui/system'

import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {

  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState("all")

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
    )
}

export default Home