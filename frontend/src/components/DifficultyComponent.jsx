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
import { StoreContext } from "../helpers/context";

const DifficultyComponent = (props) => {
  // Set global difficulty
  const context = useContext(StoreContext);
  let setDifficulty = context.difficulty[1]
  console.log(props)

  return (
    <VStack borderRadius='lg' bg={props.bg} padding='10px' border='3px solid black' h='200px' w='250px'
      onClick={() => setDifficulty(props.title)}
      as={RouterLink} to='/characters'
    >
      <Heading>{props.title}</Heading>
      <Image src={props.src} />
      <Text>{props.numQuestions} questions</Text>
    </VStack>
  );
};

export default DifficultyComponent;