import React from "react";
import { Link } from "react-router-dom";

export function FullRoster() {
  return (
    <div>
      <ul>
        {new Array(10).fill("").map((blank, index) => {
          return (
            <li key={index}>
              <Link to={`/roster/${index}`}>{index}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
