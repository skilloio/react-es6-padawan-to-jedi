document.addEventListener("DOMContentLoaded", function(event) { 

   var thStyle = {
        "color"          :"#D5DDE5",
        "background"     :"#1b1e24",
        "border-bottom"  :"4px solid #9ea7af",
        "border-right"   : "1px solid #343a45",
        "font-size"      :"23px",
        "font-weight"    : "100",
        "padding"        :"24px",
        "text-align"     :"left",
        "text-shadow"    : "0 1px 1px rgba(0, 0, 0, 0.1)",
        "vertical-align" :"middle"
   };

   var trStyle = {
        "border-top"     : "1px solid #C1C3D1",
        "border-bottom"  : "1px solid #C1C3D1",
        "color"          :"#666B85",
        "font-size"      :"16px",
        "font-weight"    :"normal",
        "text-shadow"    : "0 1px 1px rgba(256, 256, 256, 0.1)"
    }
   var tableElement = React.createElement('table', null, 
                            React.createElement('thead', null,
                                    React.createElement('tr', null, 
                                        React.createElement('th', {style: thStyle}, 'Mês'),
                                        React.createElement('th', {style: thStyle}, 'Vendas'))),
                            React.createElement('tbody', null,
                                    React.createElement('tr', {style: trStyle}, 
                                        React.createElement('td', null, 'Janeiro'),
                                        React.createElement('td', null, 'R$ 50.000')),
                                    React.createElement('tr', {style: trStyle}, 
                                        React.createElement('td', null, 'Fevereiro'),
                                        React.createElement('td', null, 'R$ 50.000')),
                                    React.createElement('tr', {style: trStyle}, 
                                        React.createElement('td', null, 'Março'),
                                        React.createElement('td', null, 'R$ 50.000')),
                                    React.createElement('tr', {style: trStyle}, 
                                        React.createElement('td', null, 'Abril'),
                                        React.createElement('td', null, 'R$ 50.000')))
                                );
            
    ReactDOM.render(tableElement, document.getElementById('app'));
});
