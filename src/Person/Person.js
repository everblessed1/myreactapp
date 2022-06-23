import React from "react";

const person=(props) =>{
    return(
        <div>
        <p>My name is {props.name} and I am {props.age} years old</p>
        <input value={props.name} type='text' onChange={props.changed}/>
        </div>
    )
}

export default person;