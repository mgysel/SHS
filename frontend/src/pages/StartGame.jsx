import React, { useEffect, useState, useContext } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { StoreContext } from "../helpers/context";
import {
  Box,
  Button,
  Heading,
  Flex,
  Image,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

const StartGame = () => {
  const context = useContext(StoreContext);
  
  useEffect(() => {
    // Set game mode to 0
    context.gameMode[1](0);

    // Choose 4 random questions to be answered
    var questions = [];
    var numQuestions = 0;
    while (numQuestions < 3) {
      const questionNumber = (Math.round(Math.random() * context.questions.length));
      if (!questions.includes(questionNumber)) {
        questions.push(questionNumber)
        numQuestions += 1
      }
    }
    context.questionOne[1](questions[0])
    context.questionTwo[1](questions[1])
    context.questionThree[1](questions[2])
    context.questionFour[1](questions[3])
  }, [])

  return (
    <Flex w="100%" direction="column">
      <VStack>
        <Image src={'images/logo/logo.png'} pt='13vh' pb='40px' />
        <Button colorScheme='teal' size='lg' width='300px' height='80px' as={RouterLink} to='/prep1'>
          Start Game
        </Button>
      </VStack>
    </Flex>
  );
};

export default StartGame;