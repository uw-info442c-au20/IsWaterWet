// import logo from './logo.svg';
import React, { Component } from 'react'; 
import './index.css';
import Aquarium from './Aquarium';
import Menu from './Menu';
import Footer from './Footer'
import event from './event.json';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      events: this.props.events
    }
  }

  render(){
    return (
      <div className="App">
        <Aquarium/>
        <Menu user={this.state.user} events={this.state.events}/>
        <Footer/>
      </div>
    );
  }
}

export default App;