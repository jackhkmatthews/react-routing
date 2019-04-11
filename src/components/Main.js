import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Roster } from "./Roster";
import { Schedule } from "./Schedule";

export function Main() {
  const extraProps = {
    color: "red"
  };
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/roster" component={Roster} />
        <Route path="/schedule" component={Schedule} />
        <Route
          exact
          path="/schedule-red"
          render={props => <Schedule {...props} data={extraProps} />}
        />
      </Switch>
    </main>
  );
}
