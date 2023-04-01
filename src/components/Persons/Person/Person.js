import React, { Component } from "react";

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
  }
  render() {
    console.log("[Person.js] inside render()");
    return (
      <div className={classes.Person}>
        <p>
          I am <b>{this.props.name}</b> and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        {/* <button onClick={props.change}>Me too !</button> */}
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </div>
    );
  }
}

export default Person;
