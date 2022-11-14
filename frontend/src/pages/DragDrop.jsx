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
import { Stage, Layer, Image as ImageKonva } from 'react-konva';
import { StoreContext } from "../helpers/context";
import useImage from 'use-image';

const DragDrop = () => {
  const context = useContext(StoreContext);
  const imageLink = `images/icons/animals/${context.animalImagesBlack[0]}`;
  const imageLinkTwo = `images/icons/animals/${context.animalImagesBlack[1]}`;
  
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);

  const CopiedImage = ({ image }) => {
    const [img] = useImage(image.src);
    return (
      <ImageKonva
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
        <div>
          <img
            alt="lion"
            src={imageLink}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          />
          <img
            alt="lion"
            src={imageLinkTwo}
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
              width={200}
              height={400}
              style={{ border: '1px solid grey' }}
              ref={stageRef}
            >
              <Layer>
                {images.map((image) => {
                  return <CopiedImage image={image} />;
                })}
              </Layer>
            </Stage>
          </div>
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
              width={200}
              height={400}
              style={{ border: '1px solid grey' }}
              ref={stageRef}
            >
              <Layer>
                {images.map((image) => {
                  return <CopiedImage image={image} />;
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