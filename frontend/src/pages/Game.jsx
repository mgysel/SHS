import React, { useEffect, useContext, useState, PureComponent } from "react";
import { 
  useLocation,
  Link as RouterLink 
} from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Checkbox, 
  CheckboxGroup,
  Circle,
  Heading,
  HStack,
  Image,
  Flex,
  Link,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { StoreContext } from "../helpers/context";

import GameCard from "../components/GameCard"


const Game = () => {
  
  const context = useContext(StoreContext);
  const characters = context.characters;

  // Question for this round
  const questions = context.questions;
  const question = context.questions[context.questionOne[0]]
  
  // Global variables
  let score = context.score[0]
  let playerOne = context.playerOne[0]
  let playerTwo = context.playerTwo[0]
  let playerThree = context.playerThree[0]
  let playerFour = context.playerFour[0]

  // Images
  let cards = context.criteria

  // Styling
  let playerPadding = '10px'

  useEffect(() => {
    // Set game mode to 1
    context.gameMode[1](1);
  }, [])

  return (
    <Flex w="100%" direction="column">
      <HStack>
        <Center align="center" width='200px' height='80vh' pt='10vh' pl='20px' >
          <VStack mr='20px' height='110%' p='20px' pt='0px'>
            <Text fontWeight='bold'>Speakers</Text>
            <Image height='120px' src={`images/characters/${characters[playerOne]}`} />
            <Image height='120px' src={`images/characters/${characters[playerTwo]}`} />
            <Text fontWeight='bold' pt='40px'>Listeners</Text>
            <Image height='120px' src={`images/characters/${characters[playerThree]}`} />
            <Image height='120px' src={`images/characters/${characters[playerFour]}`} />
          </VStack>
        </Center>
        <VStack pl='calc((100% - 220px - 920px)/2)'>
          <Box pr='10px' pt='40px' pb='40px'>
            <Image src={`images/questions/${question}`} width='280px' />
          </Box>
        
          <Wrap>
              {cards.map((image, index) => (
                <GameCard image={image} index={index} />
              ))}
          </Wrap>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default Game;