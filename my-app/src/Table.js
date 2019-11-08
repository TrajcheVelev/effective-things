import React, { Component } from 'react';
import './App.css'

class Table extends Component {
render(){
    return(
<table className="tabela">

<tr>
  <th>City</th>
  <th>CityLine</th>
  <th>Days </th>
  <th>Time</th>

</tr>

<tr>
        <td id="table-display1"> </td>
        <td id="table-display2"> </td>
        <td id="table-display3"> </td>
        <td id="table-display4"> </td>
       
</tr> 
  
</table>
)
}
    
}



export default Table;