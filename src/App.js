import {Component} from 'react';
import './App.css';
import Person  from './Person/Person.js';
//switching name/
class App extends Component {
  state={
    persons:[
      {name:'PHILPZ',age:12},
      {name:'ANU',age:77},
      {name:'JOEL',age:7},
    ],
    showPersons: false
  }
   //new name/
  setNameHandler = (newName) => {
    this.setState(
  {
     persons:[
      {name:'TIMOTHY', age:13},
      {name: newName ,age:77},
      {name:'JOEL', age:7},
    ],
  }
  )
  }
  //changing the state with input/
  nameChangeHandler=(event)=>{
    this.setState(
      {
         persons:[
          {name:'TIMOTHY', age:13},
          {name: event.target.value ,age:77},
          {name:'JOEL', age:7},
        ],
      }
    )
  }
  showPersonHandler=()=>{
    const doesShow = this.state.showPersons
    this.setState({
      showPersons:!doesShow
    })

  }


  render(){
    let people= null

    if(this.state.showPersons){
     people= <div>
      <Person name={this.state.persons[0].name} 
      age={this.state.persons[0].age}></Person>

      <Person
      changed={this.nameChangeHandler}
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}></Person>
     
      <Person name={this.state.persons[2].name} 
      age={this.state.persons[2].age}></Person>
      </div>

    }
  return (
    <div className="App">
   
      <h1>Hi,I AM A REACT JS DEVELOPER</h1>
      
      <button onClick=//{this.setNameHandler.bind(this , 'ADUN!!##$$' )}
      {this.showPersonHandler}>SUBMIT</button>
      {people}
    </div> 
  );
}
}

export default App;
