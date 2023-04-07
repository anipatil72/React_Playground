import React from "react";

import mystyles from "./Cockpit.css";

import auxx from "../../hoc/Auxx";

const cockpit = (props) => {
  let classes = [];

  let btnclass = mystyles.Button;

  if (props.showPersons) {
    btnclass = [mystyles.Button, mystyles.red].join(" ");
  }

  if (props.persons.length <= 5) {
    classes.push(mystyles.bold); // classes = ['red']
  }

  if (props.persons.length <= 1) {
    classes.push(mystyles.bold); // classes = ['red', 'bold']
  }
  return (
    <auxx>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(" ")}>This is really working !</p>

      <button
        onClick={props.clicked}
        className={btnclass}
        // style={style}
      >
        Toggle Persons
      </button>

      <button onClick={props.login}>Log In ! </button>
    </auxx>
  );
};

export default cockpit;
