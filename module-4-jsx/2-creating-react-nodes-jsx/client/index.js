import React from 'react';
import ReactDOM from 'react-dom';

/*Creating element with string type and props null*/
//var stringElement = React.createElement('div', null, 'Div with text inside!');
var jsxElement = (
<div>Div with text inside!</div>
);
//ReactDOM.render(stringElement, document.getElementById('app'));
//ReactDOM.render(jsxElement, document.getElementById('app'));

/*Creating element with React.createClass type and props null*/
var classComponent = React.createClass({
    render: function(){
        return React.createElement('div', null, 'Div with text inside!');
    }
});

var jsxclassComponent = React.createClass({
    render: function(){
        return (<div>Div with text inside 2!</div>);
    }
});

var componentElement = React.createElement(jsxclassComponent);
//ReactDOM.render(componentElement, document.getElementById('app'));

/*Creating element with string type and props not null*/
var stringElement = React.createElement('div', {id: 'teste', name: 'teste'}, 'Div with text inside!')
var jsxElement2 = (<div id="teste" name="teste">div com id e name</div>)

//ReactDOM.render(jsxElement2, document.getElementById('app'));

/*Creating element with string type and children null*/
/*var stringElement = React.createElement('div')
ReactDOM.render(stringElement, document.getElementById('app'));*/

/*REPETIDO: Creating element with string type and children string*/
/*var stringElement = React.createElement('div', null, 'Div with text inside!')
ReactDOM.render(stringElement, document.getElementById('app'));*/

/*Creating element with string type and children React.createClass()*/
var classComponent = React.createClass({
    render: function(){
        return React.createElement('div', null, 'Div with text inside!');
    }
});
//var componentElement = React.createElement('div', null, classComponent);
var componentElement = React.createElement('div', null, React.createElement(classComponent));

var jsxComponent = (
    <div>
        <div>children</div>
    </div>
)

ReactDOM.render(jsxComponent, document.getElementById('app'));
