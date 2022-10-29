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
  
  // Global variables
  let score = context.score[0]
  let numCards = context.numCards[0]
  let PlayerOne = context.playerOne[0]
  let PlayerTwo = context.playerTwo[0]
  let PlayerThree = context.playerThree[0]
  let PlayerFour = context.playerFour[0]

  // Images
  let animalsWhite = context.animalImagesWhite
  let animalsBlack = context.animalImagesBlack
  let cards = context.cards

  return (
    <Flex w="100%" direction="column">
      <VStack>
        <Heading align="center" my="1rem">
            Question
        </Heading>
        <Text>
            Question Here
        </Text>
        <Heading align="center" my="1rem">
            Cards
        </Heading>
      
        <Wrap>
          {cards.map((image, index) => (
            <WrapItem key={index}>
              <GameCard image={image} index={index} />
            </WrapItem>
          ))}
        </Wrap>

        <Center align="center">
          <Circle size='90px' border='1px solid black'>
            <Image boxSize='60px' src={`images/icons/animals/${animalsBlack[0]}`} />
          </Circle>
          <Circle size='90px' border='1px solid black'>
            <Image boxSize='60px' src={`images/icons/animals/${animalsBlack[1]}`} />
          </Circle>
          <Circle size='90px' bg='black' border='1px solid black'>
            <Image boxSize='60px' src={`images/icons/animals/${animalsWhite[2]}`}/>
          </Circle>
          <Circle size='90px' bg='black' border='1px solid black'>
            <Image boxSize='60px' src={`images/icons/animals/${animalsWhite[3]}`}/>
          </Circle>
        </Center>
      </VStack>
    </Flex>
  );
};

export default Game;