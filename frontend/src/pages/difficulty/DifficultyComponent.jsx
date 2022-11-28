import React, { useContext, useEffect, useState, useNavigate } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Heading,
  Flex,
  Image,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { StoreContext } from "../../helpers/context";

const DifficultyComponent = (props) => {
  // Set global difficulty
  const context = useContext(StoreContext);
  let [difficulty, setDifficulty] = context.difficulty;

  const [bgColor, setBgColor] = React.useState(props.color);
  const [border, setBorder] = React.useState('3px solid black');

  // Update global 
  const handleClick = () => {
    console.log("INSIDE DIFFICULTY COMPONENT CLICK")
    setDifficulty(props.title);
    context.difficulty[0] = props.title;
    console.log(context.difficulty);
    setBgColor(props.clickColor);
    setBorder('7px solid black');
  }

  // Fetch items on mount
  useEffect(() => {
    if (context.difficulty[0]===props.title) {
      setBgColor(props.clickColor);
      setBorder('7px solid black');
    } else {
      setBgColor(props.color);
      setBorder('3px solid black')
    }
  }, [context.difficulty, props.title, props.color, props.clickColor]);

  return (
    <VStack borderRadius='lg' bg={bgColor} padding='10px' border={border} h='190px' w='250px'
      onClick={handleClick}
      _hover={{ 
        bg: props.clickColor,
        cursor: 'pointer' 
      }}
    >
      <Text fontSize='2xl' fontWeight='bold' pb='5px'>{props.title}</Text>
      <Image src={props.src} height='80px' />
      <Text >{props.numQuestions} questions</Text>
    </VStack>
  );
};

export default DifficultyComponent;