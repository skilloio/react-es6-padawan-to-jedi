import React from 'react';
import ReactDOM from 'react-dom';
/*   
var tableElement = React.createElement('table', null, 
                        React.createElement('thead', null,
                                React.createElement('tr', null, 
                                    React.createElement('th', null, 'Mês'),
                                    React.createElement('th', null, 'Vendas'))),
                        React.createElement('tbody', null,
                                React.createElement('tr', null, 
                                    React.createElement('td', null, 'Janeiro'),
                                    React.createElement('td', null, 'R$ 50.000')),
                                React.createElement('tr', null, 
                                    React.createElement('td', null, 'Fevereiro'),
                                    React.createElement('td', null, 'R$ 50.000')),
                                React.createElement('tr', null, 
                                    React.createElement('td', null, 'Março'),
                                    React.createElement('td', null, 'R$ 50.000')),
                                React.createElement('tr', null, 
                                    React.createElement('td', null, 'Abril'),
                                    React.createElement('td', null, 'R$ 50.000')))
                            );
        
ReactDOM.render(tableElement, document.getElementById('app'));
*/

const table = (
    <table>
        <thead>
            <th>Mês</th>
            <th>Vendas</th>
        </thead>
        <tbody>
            <tr>
                <td>Janeiro</td>
                <td>R$ 10,00</td>
            </tr>
            <tr>
                <td>Fevereiro</td>
                <td>R$ 10,00</td>
            </tr>
            <tr>
                <td>Março</td>
                <td>R$ 10,00</td>
            </tr>
            <tr>
                <td>Abril</td>
                <td>R$ 10,00</td>
            </tr>
        </tbody>
    </table>
);

ReactDOM.render(table, document.getElementById('app'));