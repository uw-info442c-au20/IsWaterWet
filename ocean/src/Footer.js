import React from 'react';


export default class Footer extends React.Component {
    render() {
        return (
            <footer aria-label="footer">
                <h1> SAVE OUR OCEANS</h1>
                <p> "The greatest danger to our planet is the belief that someone else will <b>save it</b>" - Robert Swan</p>
                <div className= "resources" aria-label="external-resources">
                    <a href="https://www.un.org/sustainabledevelopment/oceans/" rel="noreferrer" target="_blank"> Our Cause </a>
                    <p>|</p>
                    <a href="https://marine-conservation.org/why-protect-the-ocean/" rel="noreferrer" target="_blank"> Why Protect the Ocean? </a>
                    <p>|</p>
                    <a href="https://time.com/5863821/saving-the-oceans/" rel="noreferrer" target="_blank"> How Long Do We Have? </a>
                </div>
            </footer>
        );
    }
}