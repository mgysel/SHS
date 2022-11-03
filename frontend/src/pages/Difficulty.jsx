import React, { useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Beginner,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Flex,
  Image,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import DifficultyComponent from "../components/DifficultyComponent"

const Difficulty = () => {

  let difficultyText = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Expert'
  ]

  // Load difficulty images
  let difficultyImages = [
    'images/difficulty/beginner.png',
    'images/difficulty/intermediate.png',
    'images/difficulty/advanced.png',
    'images/difficulty/expert.png'
  ]

  let difficultyColors = [
    '#E4F4B2',
    '#FFF0BF',
    '#FFD4BC',
    '#FFC5BC'
  ]

  let difficultyQuestions = [
    8,
    6,
    4, 
    3
  ]

  return (
    <Center w="100%" direction="column" mt='40px'>
      <HStack>
        {difficultyImages.map((p, i) => (
          <DifficultyComponent title={difficultyText[i]} src={difficultyImages[i]} bg={difficultyColors[i]} numQuestions={difficultyQuestions[i]} />
        ))}  
      </HStack>
    </Center>
  );
};

export default Difficulty;