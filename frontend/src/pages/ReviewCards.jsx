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
  Grid,
  Link,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { StoreContext } from "../helpers/context";

import GameCard from "../components/GameCard"


const ReviewCards = () => {
  const context = useContext(StoreContext);
  const criteriaCards = context.cards;
  console.log(criteriaCards)

  return (
    <Flex w="100%" direction="column">
      <VStack>
        <Heading align="center" my="1rem">
            Review Criteria Cards
        </Heading>
      
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          {criteriaCards.map((image, index) => (
            <WrapItem key={index}>
              <Image src={`images/cards/${image}`} index={index} />
            </WrapItem>
          ))}
        </Grid>
        <Flex>
          <Button 
            mt='40px' mb='40px'
            colorScheme='teal' size='lg'
            width='300px' height='80px'
            as={RouterLink}
            to='/game'
          >
            Ready to Play?
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ReviewCards;