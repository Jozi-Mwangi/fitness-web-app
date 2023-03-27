import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart'
import ExerciseCard from "./ExerciseCard"

import leftArrowIcon from "../assets/icons/left-arrow.png"
import rightArrowIcon from "../assets/icons/right-arrow.png"

const leftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)
    return (
        <Typography onClick = {()=>scrollPrev()} className="left-arrow" >
            <img src={leftArrowIcon} alt="left-arrow" />
        </Typography>
    )
}

const rightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)
    return (
        <Typography onClick = {()=>scrollNext()} className="right-arrow" >
            <img src={rightArrowIcon} alt="right-arrow" />
        </Typography>
    )
}


const HorizontalScrollbar = ( { data, bodyPart,setBodyPart, isBodyParts } ) => {
  return (
    <ScrollMenu LeftArrow={leftArrow} rightArrow={rightArrow} >
        {data.map((item) => 
            <Box 
                key={item.id || item}
                itemId = {item.id || item}
                title = {item.id || item}
                m="0 40px"
            >
                { isBodyParts?
                 <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                    : <ExerciseCard exercise={item} />
                }
            </Box>
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar