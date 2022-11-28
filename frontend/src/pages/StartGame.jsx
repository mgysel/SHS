import React, { useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
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

  return (
    <Flex w="100%" direction="column" as={RouterLink} to='/difficulty'>
      <VStack>
        <Image src={'images/logo/logo.png'} pt='80px' pb='40px' />
        <Button colorScheme='teal' size='lg' width='300px' height='80px'>
          Start Game
        </Button>
      </VStack>
    </Flex>
  );
};

export default StartGame;