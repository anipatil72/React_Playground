import React from 'react'


import './Person.css';

const person = (props) => {



    return (
        <div className='Person' >
            <p>I am <b>{props.name}</b> and I am {props.age} years old.</p>
            <p>{props.children}</p>
            {/* <button onClick={props.change}>Me too !</button> */}
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;