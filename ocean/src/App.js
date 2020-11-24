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
      user: this.props.user
    }
  }

  render(){
    return (
      <div className="App">
        <Aquarium/>
        <Menu user={this.state.user}/>
        <Footer/>
      </div>
    );
  }
}

export default App;