// import logo from './logo.svg';
import mystyles from "./App.css";
import React from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import { PureComponent } from "react";

export const AuthContext = React.createContext(false);

// import withClass from "../hoc/withClass";

// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props) {
    super(props);

    console.log("[App.js] inside the constructor", props);
  }

  componentWillMount() {
    console.log("[App.js] inside component will mount");
  }

  componentDidMount() {
    console.log("[App.js] inside component did mount");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[UPDATE App.js] inside getderivedStatefromProps",
      nextProps,
      prevState
    );

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("[UPDATE App.js] inside getSnapshotBeforeUpdate");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE App.js] inside should component Update",
  //     nextProps,
  //     nextState
  //   );

  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  state = {
    persons: [
      { id: "hdbwe", name: "Aniruddha", age: 21 },
      { id: "rgwqrg", name: "Ravi", age: 22 },
      { id: "w4t4tq", name: "Reshma", age: 23 },
    ],

    otherstate: "Some_Other_Value",

    showPersons: true,
    toggleClicked: 0,
    authenticated: false,
  };

  // switchNameHandler = (newName) => {
  //   // console.log("Was_Clicked !");

  //   this.setState({
  //     persons: [
  //       { name: newName, age: 21 },
  //       { name: "Ravi", age: 23 },
  //       { name: "Reshma", age: 23 },
  //     ]
  //   })

  //   console.log(this.state);
  // }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();

    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1,
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  nameChangeHandler = (event, id) => {
    // const oneperson = this.state.persons.find()

    // const personIndex = this.state.persons.findIndex((p) => {
    //   return p.id === id;
    // });

    // const pearson = { ...this.state.persons[personIndex] };

    // pearson.name = event.target.value;

    // const paarson = { ...this.state.persons };

    // paarson[personIndex] = pearson;

    // Also we can do

    //const pearson = Object.assign({}, this.state.persons[personIndex]);

    this.setState({
      persons: [
        { name: "Aniruddha", age: 21 },
        { name: event.target.value, age: 23 },
        { name: "Reshma", age: 23 },
      ],

      // persons: paarson
    });
  };

  // function App() {

  render() {
    // const style = {

    //   backgroundColor: 'green',

    //   color: 'white',

    //   font: 'inherit',

    //   border: '1px solid blue',

    //   padding: '8px',

    //   cursor: 'pointer'

    // }

    let parsons = null;

    if (this.state.showPersons) {
      parsons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );

      // style.backgroundColor = "red";

      // parsons = (

      //   <div>

      //     <Person
      //       change={this.switchNameHandler.bind(this, "AniPatil")}
      //       namechange={this.nameChangeHandler}
      //       name={this.state.persons[0].name}
      //       age={this.state.persons[0].age} />

      //     <Person
      //       change={() => this.switchNameHandler("Kya re Patil ! ")}
      //       namechange={this.nameChangeHandler}
      //       name={this.state.persons[1].name}
      //       age={this.state.persons[1].age} />
      //     <Person
      //       change={() => this.switchNameHandler("Hi ! Patil.")}
      //       namechange={this.nameChangeHandler}
      //       name={this.state.persons[2].name}
      //       age={this.state.persons[2].age} />
      //   </div>);
    }

    // let classnow = ['red', 'bold'].join(' ')

    return (
      <div className={mystyles.App}>
        {/* <button
          onClick={() => {
            this.setState = { showPersons: true };
          }}
        >
          Show Persons
        </button> */}
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          login={this.loginHandler}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          // isAuthenticated={this.authenticated}
        />

        <AuthContext.Provider value={this.state.authenticated}>
          {parsons}
        </AuthContext.Provider>
      </div>

      // {/* <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit by <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> */}

      // React.createElement('div',{className : "App"},React.createElement('h1', null, "Hi! I am Aniruddha Patil and this is my first React App"))
    );
  }
}

// function App() {

//   return (
//     <div className="App">

//       <h1>Hi! I am Aniruddha Patil and this is my first React App</h1>
//       <Person name = "Aniruddha" age = "21"/>
//       <Person name = "Ravi" age = "22"> and I love Painting</Person>
//       <Person/>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit by <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}

//     </div>

//       // React.createElement('div',{className : "App"},React.createElement('h1', null, "Hi! I am Aniruddha Patil and this is my first React App"))
//   );
// }

export default App;
