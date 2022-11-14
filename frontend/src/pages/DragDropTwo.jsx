import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  Flex,
  LinkOverlay,
  VStack,
} from "@chakra-ui/react";
import { Stage, Layer, Image, Text } from 'react-konva';
import { StoreContext } from "../helpers/context";
import useImage from 'use-image';
import Draggable from 'react-draggable';
// Drag Drop Demo (https://github.com/ChrisDobby/react-drag-drop-demo/tree/master/src)

// DRAGGABLE IMAGE
// https://blog.logrocket.com/create-draggable-components-react-draggable/

// REACT IMAGE DRAG AND SCALE
// https://www.npmjs.com/package/react-image-drag-and-scale

const DragDropTwo = () => {
  const context = useContext(StoreContext);
  const imageLink = `images/icons/animals/${context.animalImagesBlack[0]}`;
  const imageLinkTwo = `images/icons/animals/${context.animalImagesBlack[1]}`;
  const images = [imageLink, imageLinkTwo];

  const [state, setState] = React.useState({
    isDragging: false,
    x: 50,
    y: 50,
  });

  const LionImage = () => {
    const [image] = useImage('https://konvajs.org/assets/lion.png');
    return <Image image={image} />;
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
      <Text
        text="Draggable Text"
        x={state.x}
        y={state.y}
        draggable
        fill={state.isDragging ? 'green' : 'black'}
        onDragStart={() => {
          setState({
            isDragging: true,
          });
        }}
        onDragEnd={(e) => {
          setState({
            isDragging: false,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
      />
    </Layer>
  </Stage>
  );
};

export default DragDropTwo;