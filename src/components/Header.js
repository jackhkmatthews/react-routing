import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/roster">Roster</Link>
          </li>
          <li>
            <Link to="/schedule">schedule</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
