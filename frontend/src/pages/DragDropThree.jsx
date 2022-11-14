import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  Image,
  Flex,
  LinkOverlay,
  VStack,
} from "@chakra-ui/react";
import { Stage, Layer, Image as KonvaImage, Text } from 'react-konva';
import { StoreContext } from "../helpers/context";
import useImage from 'use-image';
// Drag Drop Demo
// 
import { DndProvider, DragPreviewImage, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend";
import './DragDrop.css'

const DragDropThree = () => {
  // const context = useContext(StoreContext);
  // const imageLink = `images/icons/animals/${context.animalImagesBlack[0]}`;
  // const imageLinkTwo = `images/icons/animals/${context.animalImagesBlack[1]}`;
  // const images = [imageLink, imageLinkTwo];

  // const MovableItem = () => {
  //   return (
  //       <div className='movable-item'>
  //           We will move this item
  //       </div>
  //   )
  // }
  const numTargets = 2;
  const targetsArray = [];
  const initTargets = (numTargets) => {
    for (let i = 0; i < numTargets; i++) {
      targetsArray.push(0);
    }
  }
  initTargets(numTargets);
  const [targets, setTargets] = useState(targetsArray);

  // const canSetTarget = () => {

  // }

  // Check if draggable item can move to destination
  // It can move to destination if dest=0 or no other element on same dest
  const isDestOk = (id, dest) => {
    if (dest === 0) {
      return true;
    }

    for (let i = 0; i < targets.length; i++) {
      if (i !== id && targets[i] === 1) {
        return false;
      }
    }

    return true;
  }

  // Update index of target
  const setTargetsArray = (id, dest) => {
    const targetsArray = [...targets];
    
    // Check that no other index has same destination, unless the destination is 0
    if (isDestOk(id, dest)) {
      targetsArray[id] = dest;
      setTargets(targetsArray);
    }
  }

  const MovableItem = ({setTarget, id}) => {
    const [{isDragging}, drag] = useDrag({
        item: {name: 'Any custom name'},
        type: 'Our first type',
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult && dropResult.name === 'Characters'){
              setTargetsArray(id, 0)
            } else if (dropResult && dropResult.name === 'Player 1') {
              setTargetsArray(id, 1)
            } 
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;

    return (
        <div ref={drag} className='movable-item' style={{opacity}}>
            We will move this item
        </div>
    )
  }

  const Column = ({children, className, title}) => {
      const [, drop] = useDrop({
          accept: 'Our first type',
          drop: () => ({name: title}),
      });

      return (
          <div ref={drop} className={className}>
              {title}
              {children}
          </div>
      )
  }

  const Item1 = <MovableItem setTarget={setTargets} id={0} />;
  const Item2 = <MovableItem setTarget={setTargets} id={1} />;

  const Items = [Item1, Item2];

  return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
          <Column title='Characters' className='column first-column'>
            {Items.map((item, i) => (
              targets[i] === 0 && item
            ))}
          </Column>
          <Column title='Player 1' className='column first-column'>
            {Items.map((item, i) => (
              targets[i] === 1 && item
            ))}
          </Column>
      </DndProvider>
    </div>
  );
};

export default DragDropThree;