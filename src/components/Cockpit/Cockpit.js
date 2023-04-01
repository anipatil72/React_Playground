import React from "react";

import mystyles from "./Cockpit.css";

const cockpit = (props) => {
  let classes = [];

  let btnclass = "";

  if (props.showPersons) {
    btnclass = mystyles.red;
  }

  if (props.persons.length <= 5) {
    classes.push(mystyles.bold); // classes = ['red']
  }

  if (props.persons.length <= 1) {
    classes.push(mystyles.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={mystyles.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(" ")}>This is really working !</p>

      <button
        onClick={props.clicked}
        className={btnclass}
        // style={style}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
