import React from "react";
import { Switch, Route } from "react-router-dom";

import StartGame from "./StartGame";
import SetupGame from "./SetupGame";
import Difficulty from "./Difficulty";
import Game from "./Game";
import DragDrop from "./DragDrop";
import ReviewCards from "./ReviewCards";

const Navigation = () => {

  return (
    <Switch>
      <Route exact path="/">
        <StartGame />
      </Route>
      <Route exact path="/difficulty">
        <Difficulty />
      </Route>
      <Route exact path="/characters">
        <DragDrop />
      </Route>
      <Route exact path="/review">
        <ReviewCards />
      </Route>
      <Route exact path="/game">
        <Game />
      </Route>
    </Switch>
  );
};

export default Navigation;
