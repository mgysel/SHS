import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { StoreContext } from "../helpers/context";
import Carousel from 'better-react-carousel';
import './DragDrop.css';
import BackButton from "../components/BackButton";
import ForwardButton from "../components/ForwardButton";

const Prep1 = () => {
  const context = useContext(StoreContext);
  const characters = context.characters;
  const criteriaCards = context.cards;

  return (
    
    <>
      <Center>
        <Heading align="center" my="1rem">
          Learn how to use Criteria Cards
        </Heading>
        <Flex position='absolute' top='75px' left='40px' as={RouterLink} to='/'>
          <BackButton />
        </Flex>
        <Flex position='absolute' top='75px' right='40px' as={RouterLink} to='/prep2'>
          <ForwardButton />
        </Flex>
      </Center>
      <Center mt='20px' mb='50px'>
        <HStack>
          <Box width='170px' pr='10px'>
            <Heading>Example Question</Heading>
          </Box>
          <Box pl='10px'>
            <Text>How to use criteria card</Text>
          </Box>
        </HStack>
      </Center>
      <Flex pl='30vw' pr='30vw'>
        <Carousel cols={1} rows={1} gap={15} loop showDots>
          {criteriaCards.map((image, index) => (
            <Carousel.Item key={index}>
              <Center>
                <Image src={`images/cards/${image}`} index={index} />
              </Center>
            </Carousel.Item>
          ))}
        </Carousel>
      </Flex>  
    </>
  );
};

export default Prep1;