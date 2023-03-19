import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from "./Person/Person"

import { Component } from 'react'


class App extends Component {

  state = {

    persons: [

      { id: "hdbwe", name: 'Aniruddha', age: 21 },
      { id: "rgwqrg", name: 'Ravi', age: 22 },
      { id: "w4t4tq", name: 'Reshma', age: 23 }

    ],

    otherstate: "Some_Other_Value",

    showPersons: true

  }

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

    this.setState({ persons: persons })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({ showPersons: !doesShow });
  }

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
      ]

      // persons: paarson
    })

  }


  // function App() {

  render() {

    const style = {

      backgroundColor: 'green',

      color: 'white',

      font: 'inherit',

      border: '1px solid blue',

      padding: '8px',

      cursor: 'pointer'


    }

    let parsons = null;

    if (this.state.showPersons) {

      parsons = (

        <div>

          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}

              name={person.name}
              age={person.age}

              key={person.id}

              changed={(event) => this.nameChangeHandler(event, person.id)}




            ></Person>
          })}

        </div>



      );

      style.backgroundColor = "red";






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

    let classes = [];

    if (this.state.persons.length <= 5) {

      classes.push('red');  // classes = ['red']



    }


    if (this.state.persons.length <= 1) {

      classes.push('bold');  // classes = ['red', 'bold']



    }







    return (



      <div className="App">

        <h1>Hi! I am Aniruddha Patil and this is my first React App</h1>
        <p className={classes.join(' ')}>This is really working !</p>

        <button
          onClick={this.togglePersonsHandler}
          style={style}
        >Toggle Persons</button>


        {parsons}

      </div >









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




};

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
