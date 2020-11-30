import React, { Component } from 'react'; 
import Aquarium from './Aquarium';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            eventsJSON: this.props.events
        }
    }

      whichMenu = () => {
          if(this.props.menuStatus === 'aquarium'){
            return (<FishMenu user={this.props.user}/>)
          } else if(this.props.menuStatus ==='events'){
            return(<EventMenu events={this.state.eventsJSON} user={this.props.user}/>)
          }
      }

    render(){
        return(
            <div className = "menu">
               {this.whichMenu()}
            </div>
        )
    }
}


class FishMenu extends Component{
    render(){
            let items = this.props.user.fish.map(function (fish) {
                if(fish === "clown-fish"){
                    return (
                        <img className = "img" src="img/Real-Clownfish.png" alt="Clown Fish"/>
                    )
                } else if(fish === "jelly-fish"){
                    return (
                        <img className = "img" src="img/Real-Jellyfish.png" alt="Jelly Fish"/>
                    )
                } else if(fish === "yellow-tang"){
                    return (
                        <img className = "img" src="img/Real-Yellowtang.png" alt="Yellowtang"/>
                    )
                } else if(fish === "cuttle-fish"){
                    return (
                        <img className = "img" src="img/Real-Cuttlefish.png" alt="Cuttle Fish"/>
                    )
                }
            })
            return (
                <div className="fish-menu">
                    {items}
                </div>
            )
    }
}


// Overall Event Page
class EventMenu extends Component{
    render() {
        return (
            <div>
                <h1>Upcoming Events</h1>
                <div className="event-contain" >
                    <EventsList events={this.props.events} userEvents={this.props.user.events} aria-label="list-of-events"/>
                </div>
            </div>
        ); 
    }
}


//All of the different events compiled within a list
class EventsList extends Component{
    render(){
        let userEvents = this.props.userEvents
        let items = this.props.events.events.map(function (event) {
            return (
                <EventListItem event={event}  userEvents={userEvents} aria-label="clean-up-event-card"/>
            )
        })
        return (
            <div>
                {items}
            </div>
        )
    }
}

// Represents a single event 
class EventListItem extends Component{
    // toggle is used to show/hide the event details page
    constructor(props) {
        super(props);
        this.state = {
            isToggle: false
        }
        this.handleClick = this.handleClick.bind(this);
      }

      isUserInterested(userEvents, eventID){
        for(let i in userEvents){
            if(userEvents[i] === eventID){ //if the user is interested in the event
                return (
                    <p className="event-interested">You are interested in attending this event!</p>
                )
            }
        }
    }
    
      // changes the toggle state depending on click
      handleClick() {
        this.setState({isToggle: !this.state.isToggle})
      }

    render() {
        //console.log(this.state.userEvents)
        return (
            <div className="events">
                <div className = "date">
                    <p className = "day">{this.props.event.day}</p>
                    <p className = "month">{this.props.event.month}</p>
                </div>
                <div className = "description">
                    <p className = "title" >{this.props.event.title}</p>
                    <p>{this.props.event.description}</p>
                    <div className = "attendance">
                        <img src= "img/interested.png" alt="interested-icon"></img>
                        <a>{this.props.event.interested}</a>
                        <img src= "img/going.png" alt="rsvp-attending-icon"></img>
                        <a>{this.props.event.going}</a>
                        <img src= "img/notgoing.png" alt="rsvp-not-attending-icon"></img>
                        <a>{this.props.event.notgoing}</a>
                    </div>
                   {this.isUserInterested(this.props.userEvents, this.props.event.ID)}
                </div>
           
            </div>
        )
    }
}

export default Menu;