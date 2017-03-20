document.addEventListener("DOMContentLoaded", function(event) { 
    var reactElementWithPros = React.createElement('div', {
        id: 'element',
        //note use of JS class property representing class attribute below
        //i.e., className
        className: 'red',
        //note use of JS camel-cased CSS property below
        //i.e., backgroundColor
        style: {backgroundColor: 'red'},
        'data-teste': 'teste',
        teste: 'opa',
    }, 'Element with properties');
    
    ReactDOM.render(reactElementWithPros, document.getElementById('app'));
    
});
