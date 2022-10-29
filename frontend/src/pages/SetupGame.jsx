import React, { useEffect, useContext, useState } from "react";
import { 
  useLocation,
  Link as RouterLink
} from "react-router-dom";
import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";
import { StoreContext } from "../helpers/context";

const SetupGame = () => {

  const context = useContext(StoreContext);
  
  // Global variables
  let animalImagesBlack = context.animalImagesBlack
  let playerOne, setPlayerOne = context.playerOne
  let playerTwo, setPlayerTwo = context.playerTwo
  let playerThree, setPlayerThree = context.playerThree
  let playerFour, setPlayerFour = context.playerFour

  return (
    <Flex w="100%" direction="column">
      <VStack>
        <Heading align="center" my="1rem">
            Setup Game
        </Heading>

        <HStack>
          <VStack border='1px solid black'>
            <Image boxSize='100px' src={`images/icons/animals/${animalImagesBlack[0]}`} />
            <Input placeholder='Enter name' value={playerOne} onChange={(e)=>setPlayerOne(e.target.value)} />
          </VStack>
          <VStack border='1px solid black'>
            <Image boxSize='100px' src={`images/icons/animals/${animalImagesBlack[1]}`} />
            <Input placeholder='Enter name' value={playerTwo} onChange={(e)=>setPlayerTwo(e.target.value)} />
          </VStack>
          <VStack border='1px solid black'>
            <Image boxSize='100px' src={`images/icons/animals/${animalImagesBlack[2]}`} />
            <Input placeholder='Enter name' value={playerThree} onChange={(e)=>setPlayerThree(e.target.value)} />
          </VStack>
          <VStack border='1px solid black'>
            <Image boxSize='100px' src={`images/icons/animals/${animalImagesBlack[3]}`} />
            <Input placeholder='Enter name' value={playerFour} onChange={(e)=>setPlayerFour(e.target.value)} />
          </VStack>
        </HStack>

        <Button colorScheme='teal' size='lg' as={RouterLink} to='/game'>
          Start Game
        </Button>

      </VStack>
    </Flex>
  );
};

export default SetupGame;