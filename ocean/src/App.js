// import logo from './logo.svg';
import React, { Component } from 'react'; 
import './index.css';
import Aquarium from './Aquarium';
import Menu from './Menu';
import Footer from './Footer'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      events: this.props.events,
      menuStatus: "aquarium"
    }
  }

  switchMenuStatus = (newStatus) => {
    if(newStatus === "aquarium" || newStatus === "events"){
      //this.setState({ menuStatus: newStatus });
      this.setState((currState) => {
        let stateChanges = { menuStatus: newStatus };
        return stateChanges;
      });
    }
    console.log(this.state.menuStatus)
  }

  render(){
    console.log("I am rendering: " + this.state.menuStatus)
    return (
      <div className="App">
        <Aquarium/>
        <MenuController switchMenuStatus={this.switchMenuStatus}/>
        <Menu user={this.state.user} events={this.state.events} menuStatus={this.state.menuStatus}/>
        <Footer/>  
      </div>
    );
  }
}

class MenuController extends Component{
  aquariumHandleClick = (event) =>{
    this.props.switchMenuStatus("aquarium");
    console.log("it should be aquarium")
  }

  eventsHandleClick = (event) =>{
    this.props.switchMenuStatus("events");
    console.log("it should be events")
  }


  render(){
      return(
          <div className="menu-controller">
              <nav>
              <ul className="menu-list">
                      <li>
                          <h1 onClick={this.aquariumHandleClick}>AQUARIUM</h1>
                      </li>
                      <li >
                          <h1 onClick={this.eventsHandleClick}>EVENTS</h1>
                      </li>
                  </ul>
              </nav>
          </div>
      )
  }
}

export default App;