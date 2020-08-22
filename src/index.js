import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = React.createElement('h1', {}, 'Without JSX');
ReactDOM.render(myfirstelement, document.getElementById('root'));

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Samir</td>
    </tr>
    <tr>
      <td>Khanal</td>
    </tr>
  </table>
);

ReactDOM.render(myelement, document.getElementById('root1'));

const myelements = <input type="text" />;
ReactDOM.render(myelements, document.getElementById('root2'));
