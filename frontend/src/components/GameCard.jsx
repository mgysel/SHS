import React, { useEffect, useContext, useState, PureComponent } from "react";
import { 
  Box, 
  Checkbox,
  CheckboxGroup,
  Flex,
  HStack,
  Image, 
  LinkBox, 
  LinkOverlay,
  Show,
  Text, 
  VStack
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { StoreContext } from "../helpers/context";

const GameCard = (props) => {
  // Global variables
  const context = useContext(StoreContext);
  let score = context.score[0]
  let setScore = context.score[1]

  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)

  // If both boxes checked, increment score, uncheck cards
  useEffect(() => {
    if (checked1 && checked2) {
      console.log("CHECKED BOTH ITEMS")
      console.log("Checked item 1 before: ", checked1)
      console.log("Checked item 2 before: ", checked2)
      setChecked1(false)
      setChecked2(false)
      context.score[1](score + 1)
      console.log("Checked item 1 after: ", checked1)
      console.log("Checked item 2 after: ", checked2)
    } 
  }, [checked1, checked2])

  const handleCheck1 = (val) => {
    console.log("Handle Check 1")
    console.log("Val: ", val)
    console.log("check before: ", checked1)
    setChecked1(val)
    console.log("check 1 after: ", checked1)
    console.log("check 2 after: ", checked2)
  }

  const handleCheck2 = (val) => {
    console.log("Handle Check 2")
    console.log("Val: ", val)
    console.log("check before: ", checked2)
    setChecked2(val)
    console.log("check 1 after: ", checked1)
    console.log("check 2 after: ", checked2)
  }

  const handleImageClick = () => {
    console.log("Handle Image Click")
    setChecked1(false)
    setChecked2(false)
    console.log("CHECKED 1: ", checked1)
    console.log("CHECKED 2: ", checked2)
  }

  return (
    <Flex pl='15px' pr='15px'>
      <VStack>
        <Text>
          Checked1: {checked1.toString()}
        </Text>
        <Text>
          Checked2: {checked2.toString()}
        </Text>
        <Image src={`images/cards/${props.image}`} onClick={handleImageClick}/>
        <HStack>
          <CheckboxGroup colorScheme='green'>
              <Checkbox
                value='1'
                isChecked={checked1}
                onChange={(e) => handleCheck1(e.target.checked)}
              >
                1
              </Checkbox>
              <Checkbox
                value='2'
                isChecked={checked2}
                onChange={(e) => handleCheck2(e.target.checked)}
              >
                2
              </Checkbox>
          </CheckboxGroup>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default GameCard;
