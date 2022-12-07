import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
  useDisclosure,
  WrapItem,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { StoreContext } from "../helpers/context";
import CardDrawer from './navbar/CardDrawer.jsx';
import { useHistory, useLocation } from 'react-router-dom';

import Timer from './Timer'

const Navbar = () => {

  const context = useContext(StoreContext);
  // const [cc, setCC] = React.useState(context.cc);
  // const [difficulty, setDifficulty] = React.useState(context.difficulty);
  let [cc, setCC] = React.useState(context.cc);
  let [difficulty, setDifficulty] = React.useState(context.difficulty);
  const [gameMode, setGameMode] = context.gameMode;
  const btnRef = React.useRef()

  const { isOpen, onOpen, onClose } = useDisclosure();

  let history = useHistory();

  //Update global 
  const handleStartClick = () => {
    console.log("NAVBAR HANDLING CLICK");
    setCC('');
    setDifficulty('');
    context.cc[0] = '';
    context.difficulty[0] = '';
    console.log(context.cc);
    console.log(context.difficulty);
    history.push("/");
  }
  // Set global CC (context or character)

  // Styling
  const p='10px';

  return (
    <Flex h="3.5rem" justifyContent="center" bg="gray.700" color="white">
      <Timer />
      <Flex
        w="100%"
        maxW="1366px"
        h="100%"
        alignItems="center"
        px="1rem"
        justifyContent="right"
        p='5px'
      >
        <Text p={p} fontSize='2xl' onClick={handleStartClick} _hover={{ 
          cursor: 'pointer' 
        }}>
          Start
        </Text>
        <Text p={p} fontSize='2xl' as={RouterLink} to={"/difficulty"}>
          Difficulty
        </Text>
        <Text p={p} fontSize='2xl' as={RouterLink} to={"/characters"}>
          Characters
        </Text>
        <Text p={p} fontSize='2xl'  as={RouterLink} to={"/review"}>
          Review
        </Text>
        <Text p={p} fontSize='2xl'  as={RouterLink} to={"/game"}>
          Game
        </Text>
        <Text 
          p={p} fontSize='2xl' onClick={onOpen} key='1' m={4} ref={btnRef} 
          _hover={{ 
            cursor: 'pointer' 
          }}
        >
          Review Cards
        </Text>
        <Drawer onClose={onClose} isOpen={isOpen} size='full'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Review Criteria Cards</DrawerHeader>
            <DrawerBody>
              <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                {context.cards.map((image, index) => (
                  <WrapItem key={index}>
                    <Image src={`images/cards/${image}`} index={index} />
                  </WrapItem>
                ))}
              </Grid>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};

export default Navbar;
