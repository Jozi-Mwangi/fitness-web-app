import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'


const ExerciseDetail = () => {

  const [exercises, setExercises] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscle, setTargetMuscle] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  const { id } = useParams()

  useEffect(()=>{
    const fetchExerciseDetailData = async () => {
      const exerciseDbURL = "https://exercisedb.p.rapidapi.com"
      const youtubeSearchURL = "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailData = await fetchData(`${exerciseDbURL}/exercises/exercise/${id}`, exerciseOptions)
      setExercises(exerciseDetailData)

      const exerciseVideoData = await fetchData(`${youtubeSearchURL}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideoData.contents)

      const targetExerciseDetail = await fetchData(`${exerciseDbURL}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscle(targetExerciseDetail)
      
      const equipmentExerciseDetail = await fetchData(`${exerciseDbURL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentExercises(equipmentExerciseDetail)
    }

    fetchExerciseDetailData()

  },[id])

  return (
    <Box>
      <Detail exercises={exercises} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exercises.name} />
      <SimilarExercises targetMuscle={targetMuscle} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail