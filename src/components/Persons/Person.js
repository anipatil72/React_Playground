import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);

    console.log("[Persons.js] inside the constructor", props);
  }

  componentWillMount() {
    console.log("[Persons.js] inside component will mount");
  }

  componentDidMount() {
    console.log("[Persons.js] inside component did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] inside componentWillReceibeProps",
      nextProps
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] inside should component update",
      nextProps,
      nextState
    );

    return true;
  }

  render() {
    console.log("[Persons.js] inside render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          key={person.id}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}
        ></Person>
      );
    });
  }
}
export default Persons;
