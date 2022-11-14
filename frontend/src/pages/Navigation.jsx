import React from "react";
import { Switch, Route } from "react-router-dom";

import StartGame from "./StartGame";
import SetupGame from "./SetupGame";
import Difficulty from "./Difficulty";
import Game from "./Game";
import DragDrop from "./DragDrop"
import DragDropTwo from "./DragDropTwo"
import DragDropThree from "./DragDropThree"

const Navigation = () => {

  return (
    <Switch>
      <Route exact path="/">
        <StartGame />
      </Route>
      <Route exact path="/setup">
        <SetupGame />
      </Route>
      <Route exact path="/difficulty">
        <Difficulty />
      </Route>
      <Route exact path="/game">
        <Game />
      </Route>
      <Route exact path="/dragdrop">
        <DragDropThree />
      </Route>
    </Switch>
  );
};

export default Navigation;
