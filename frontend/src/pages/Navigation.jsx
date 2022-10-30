import React from "react";
import { Switch, Route } from "react-router-dom";

import StartGame from "./StartGame";
import SetupGame from "./SetupGame";
import Game from "./Game";
import DragDrop from "./DragDrop"

const Navigation = () => {

  return (
    <Switch>
      <Route exact path="/">
        <StartGame />
      </Route>
      <Route exact path="/setup">
        <SetupGame />
      </Route>
      <Route exact path="/game">
        <Game />
      </Route>
      <Route exact path="/dragdrop">
        <DragDrop />
      </Route>
    </Switch>
  );
};

export default Navigation;
