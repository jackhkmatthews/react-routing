import React from "react";
import { Switch, Route } from "react-router-dom";
import { FullRoster } from "./FullRoster";
import { Player } from "./Player";

export function Roster() {
  return (
    <div>
      <h2>This is the roster page!</h2>
      <Switch>
        <Route exact path="/roster" component={FullRoster} />
        <Route exact path="/roster/:number" component={Player} />
      </Switch>
    </div>
  );
}
