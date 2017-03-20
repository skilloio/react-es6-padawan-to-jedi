document.addEventListener("DOMContentLoaded", function(event) { 
    
    var inlineStyles = {backgroundColor: 'red', fontSize: 40};

    var reactElementinlineCss = React.createElement('div', {
        style: inlineStyles,
    }, 'Element with styl properties');
    
    ReactDOM.render(reactElementinlineCss, document.getElementById('app'));
    
});
