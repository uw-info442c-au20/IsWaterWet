import React, { Component } from 'react'; 

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
                        <img className = "img" src="img/jelly.png" alt="Jelly Fish"/>
                    )
                } else if(fish === "jelly-fish"){
                    return (
                        <img className = "img" src="img/clown.png" alt="Clown Fish"/>
                    )
                } else if(fish === "yellow-tang"){
                    return (
                        <img className = "img" src="img/cuttle.png" alt="Cuttlefish"/>
                    )
                } else if(fish === "cuttle-fish"){
                    return (
                        <img className = "img" src="img/yellow.png" alt="Yellow Tang"/>
                    )
                }
            })
            return (
                <div className="fish-menu" aria-label="fish-menu">
                    {items}
                </div>
            )
    }
}


// Overall Event Page
class EventMenu extends Component{
    render() {
        return (
            <div aria-label="events">
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
    interestedStatus(userEvents, eventID){
        for(let i in userEvents){
            if(userEvents[i] === eventID){ //icon for if the user is interested in the event
                return (
                        <img src= "img/star.png" alt="-filled-icon"></img>
                )
            }
        }
        return (<img src= "img/interested.png" alt="interested-icon"></img>)
    }
    
      // changes the toggle state depending on click
      handleClick() {
        this.setState({isToggle: !this.state.isToggle})
      }

    render() {
        //console.log(this.state.userEvents)
        return (
            <div className="events">
                <div className = "date" aria-label="event-date">
                    <p className = "day">{this.props.event.day}</p>
                    <p className = "month">{this.props.event.month}</p>
                </div>
                <div className = "description" aria-label="event-description">
                    <p className = "title" aria-label="event-title">{this.props.event.title}</p>
                    <p>{this.props.event.description}</p>
                    <p className = "fishname"> Adds &#128032; {this.props.event.fish} &#128032; to your aquarium!</p>
                    <p className = "attend">
                    {this.isUserInterested(this.props.userEvents, this.props.event.ID)}</p>
                    <div className = "attendance" aria-label="attendance">
                        {/* <img src= "img/interested.png" alt="interested-icon"></img>
                        <p>{this.props.event.interested}</p> */}
                        {this.interestedStatus(this.props.userEvents, this.props.event.ID)}
                        <p>{this.props.event.interested}</p>
                        <img src= "img/going.png" alt="rsvp-attending-icon"></img>
                        <p aria-label="attending">{this.props.event.going}</p>
                        <img src= "img/notgoing.png" alt="rsvp-not-attending-icon"></img>
                        <p aria-label="not-attending">{this.props.event.notgoing}</p>
                    </div>
                </div>
           
            </div>
        )
    }
}

export default Menu;