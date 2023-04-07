import React, { Component } from "react";
import { AuthContext } from "../../../containers/App";

import propTypes from "prop-types";

import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);

    console.log("[Person.js] inside the constructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] inside component will mount");
  }

  componentDidMount() {
    console.log("[Person.js] inside component did mount");

    if (this.inputElement.position == 1) {
      this.inputElement.focus();
    }
  }
  render() {
    console.log("[Person.js] inside render()");
    return (
      <div className={classes.Person}>
        <AuthContext.Consumer>
          {(auth) => (auth ? <p>I am authenticated ! </p> : null)}
        </AuthContext.Consumer>
        <p>
          I am <b>{this.props.name}</b> and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        {/* <button onClick={props.change}>Me too !</button> */}
        <input
          type="text"
          ref={(inp) => {
            this.inputElement = inp;
          }}
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </div>
    );
  }
}

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func,
};

export default Person;
