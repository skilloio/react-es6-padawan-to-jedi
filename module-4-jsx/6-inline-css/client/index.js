import React from 'react';
import ReactDOM from 'react-dom';

 /*var inlineStyles = {backgroundColor: 'red', fontSize: 40};

  var reactElementinlineCss = React.createElement('div', {
      style: inlineStyles,
  }, 'Element with styl properties');
  
  ReactDOM.render(reactElementinlineCss, document.getElementById('app'));*/

  var inlineStyles = {backgroundColor: 'red', fontSize: 40};

  var reactElementinlineCss = (<div style={inlineStyles}> JSX element with styles</div>);

  ReactDOM.render(reactElementinlineCss, document.getElementById('app'));