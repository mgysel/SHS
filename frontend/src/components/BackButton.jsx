import React, { useState, useContext, useEffect, useRef } from "react";
import {
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons';

const BackButton = (props) => {

  return (
    <IconButton
      width='100px' height='60px'
      backgroundColor='#7CB9E8' color='black'
      aria-label='Search database'
      icon={<ArrowBackIcon />}
    />
  );
};

export default BackButton;
