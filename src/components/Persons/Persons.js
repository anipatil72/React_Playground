import React, { PureComponent } from "react";

import Person from "./Person/Person";

class Persons extends PureComponent {
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
      "[UPDATE Persons.js] inside componentWillReceiveProps",
      nextProps
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE Persons.js] inside should component update",
  //     nextProps,
  //     nextState
  //   );

  //   return nextProps.persons !== this.props.persons;

  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] inside component will update",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE Persons.js ] inside component did update");
  }

  render() {
    console.log("[Persons.js] inside render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          key={person.id}
          position={index}
          name={person.name}
          age={person.age}
          // authenticated={this.props.isAuthenticated}
          changed={(event) => this.props.changed(event, person.id)}
        ></Person>
      );
    });
  }
}
export default Persons;
