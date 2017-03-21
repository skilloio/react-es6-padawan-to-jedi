import React from 'react';
import ReactDOM from 'react-dom';

var nav = React.createElement('nav', {id:'nav'}, 
                    React.createElement('li', null , React.createElement('a', {href: '#'}, 'Home')),
                    React.createElement('li', null , React.createElement('a', {href: '#'}, 'About')),
                    React.createElement('li', null , React.createElement('a', {href: '#'}, 'Clients')),
                    React.createElement('li', null , React.createElement('a', {href: '#'}, 'Contact us')));

var nav2 = (
    <ul id="nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Clients</a></li>
        <li><a href="#">Contact Us</a></li>
    </ul>
);

ReactDOM.render(nav, document.getElementById('root'));
//ReactDOM.render(nav2, document.getElementById('root'));
