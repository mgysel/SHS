import React, { useState, useContext, useEffect, useRef } from "react";
import {
  IconButton,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';

const ForwardButton = (props) => {

  return (
    <IconButton
      width='100px' height='60px'
      backgroundColor='teal' color='white'
      aria-label='Go to next page'
      icon={<ArrowForwardIcon />}
    />
  );
};

export default ForwardButton;
