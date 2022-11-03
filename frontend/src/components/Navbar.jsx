import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { StoreContext } from "../helpers/context";

import Timer from './Timer'

const Navbar = () => {

  const context = useContext(StoreContext);
  const [gameMode, setGameMode] = context.gameMode;

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
      >
        <Heading as={RouterLink} to={"/"}>
          Start
        </Heading>
        <Heading as={RouterLink} to={"/setup"}>
          Setup
        </Heading>
        <Heading as={RouterLink} to={"/difficulty"}>
          Difficulty
        </Heading>
        <Heading as={RouterLink} to={"/game"}>
          Game
        </Heading>
        <Heading as={RouterLink} to={"/dragdrop"}>
          DragDrop
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Navbar;
