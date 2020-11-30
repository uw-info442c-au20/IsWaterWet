// import logo from './logo.svg';
import React, { Component } from 'react'; 
import './index.css';
import Aquarium from './Aquarium';
import Menu from './Menu';
import Footer from './Footer'

import kataraUser from './katara.json';
import zukoUser from './zuko.json';


export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      events: this.props.events,
      menuStatus: "aquarium"
    }
  }

  switchUser = () =>{
    if(this.state.user.user === "Katara"){
      this.setState((currState) => {
        let stateChanges = { user: zukoUser};
        return stateChanges;
      }); 
    } else {
     this.setState((currState) => {
        let stateChanges = { user: kataraUser};
        return stateChanges;
      });
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
  }

  render(){  
    return (
      <div className="App">
        <MenuController switchMenuStatus={this.switchMenuStatus} menuStatus={this.state.menuStatus}/>
        <Aquarium user={this.state.user}/>
      <UserProfile user={this.state.user} switchUser={this.switchUser}/>
        <Menu user={this.state.user} events={this.state.events} menuStatus={this.state.menuStatus}/>
        <Footer/>  
      </div>
    );
  }
}

class UserProfile extends Component{

profileHandleClick = (event) =>{
  this.props.switchUser()
}

  render(){
    return(
      <div className="profile" onClick={this.profileHandleClick}>
        <img src={this.props.user.pic} alt="profile pic"/>
        <h1>{this.props.user.user.toUpperCase()}</h1>
      </div>
    )
  }
}

class MenuController extends Component{
  aquariumHandleClick = (event) =>{
    this.props.switchMenuStatus("aquarium");
  }

  eventsHandleClick = (event) =>{
    this.props.switchMenuStatus("events");
  }

  aquarium = () => {
    if(this.props.menuStatus === 'aquarium'){
    return (<h1 className = 'selected' onClick={this.aquariumHandleClick}>AQUARIUM</h1>)
    } else {
      return (<h1 onClick={this.aquariumHandleClick}>AQUARIUM</h1>)
    }
  }

  events = () => {
    if(this.props.menuStatus === 'events'){
    return (<h1 className = 'selected' onClick={this.eventsHandleClick}>EVENTS</h1>)
    } else {
      return (<h1 onClick={this.eventsHandleClick}>EVENTS</h1>)
    }
  }


  render(){
      return(
          <div className="menu-controller">
              <nav>
              <ul className="menu-list">
                      <ul>
                          {this.aquarium()}
                      </ul>
                      <ul >
                          {this.events()}
                      </ul>
                  </ul>
              </nav>
          </div>
      )
  }
}

export default App;