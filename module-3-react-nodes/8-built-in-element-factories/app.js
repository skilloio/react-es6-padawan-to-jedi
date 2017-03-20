document.addEventListener("DOMContentLoaded", function(event) { 
    
    var reactNodeParagraph = React.DOM.p({id: 'paragraph'}, 'paragraph');
    var reactNodeSpan = React.DOM.span({id: 'span'}, 'span');
    var reactNodeLink = React.DOM.a({id: 'link'}, 'link');
    
    var reactNodeDiv = React.DOM.div({id: 'content'}, reactNodeParagraph, reactNodeSpan, reactNodeLink);
    
    ReactDOM.render(reactNodeDiv, document.getElementById('app'));
    
});
