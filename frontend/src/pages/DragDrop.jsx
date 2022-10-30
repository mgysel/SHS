import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  Flex,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Stage, Layer, Image } from 'react-konva';
import { StoreContext } from "../helpers/context";
import useImage from 'use-image';

const DragDrop = () => {
  const context = useContext(StoreContext);
  const imageLink = `images/icons/animals/${context.animalImagesBlack[0]}`;
  
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);

  const URLImage = ({ image }) => {
    const [img] = useImage(image.src);;
    return (
      <Image
        image={img}
        x={image.x}
        y={image.y}
        // I will use offset to set origin to the center of the image
        offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
      />
    );
  };

  return (
    <Flex w="100%" direction="column">
      <VStack>
        <Image src={'images/logo/logo.png'} />
        <Button colorScheme='teal' size='lg' as={RouterLink} to='/setup'>
          Drag and Drop Image
        </Button>
        <div>
          Try to trag and image into the stage:
          <br />
          <img
            alt="lion"
            src={imageLink}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          />
          <div
            onDrop={(e) => {
              e.preventDefault();
              // register event position
              stageRef.current.setPointersPositions(e);
              // add image
              setImages(
                images.concat([
                  {
                    ...stageRef.current.getPointerPosition(),
                    src: dragUrl.current,
                  },
                ])
              );
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <Stage
              width={window.innerWidth}
              height={window.innerHeight}
              style={{ border: '1px solid grey' }}
              ref={stageRef}
            >
              <Layer>
                {images.map((image) => {
                  return <URLImage image={image} />;
                })}
              </Layer>
            </Stage>
          </div>
        </div>
      </VStack>
    </Flex>
  );
};

export default DragDrop;