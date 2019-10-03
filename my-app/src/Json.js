import React from 'react';
import Bus from "./logo_bemidjibus.png"
import Macedonia from "./macedonia_flag.png"
import GreatBritain from "./united_kingdom_great_britain.png"
import LittleBus from "./32x32_1.gif"
import './App.css';



class Json extends React.Component{
    constructor(props){
        super(props);
         this.state={             
           
          isLoaded: false, 
          items:[]
           
      };
      
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }  
    
    handleChange(event) {
      this.setState({value: event.target.value}); 
}

componentDidMount() {
  fetch('Data.json')
    .then(res => res.json())
    .then(json=> {
        this.setState({
          
         isLoaded:true,
         items: json
        })
      })
      .catch(error => {alert(error)})
          
    
}



      handleSubmit(event) {
        event.preventDefault();
        


      }
      

    render() {
        
      var  { isLoaded, items } = this.state;
      if (!isLoaded) {
        return <div>Loading</div>;
      } else {
              
        return (
          <div className="container">
         <header className="headerr">
                <div className="flags">
                <img src={Macedonia} className="macedonia"></img>
                <img src={GreatBritain} className="greatbritain"></img>
              </div>
              </header>

               <h1 className="title">Возен Ред</h1>;  
               <div className="avtobus"> <img src={Bus} className="picture"></img>
    </div>
          <ul className="ull">
         <li className="li1"> <a href="#" className="a1">Почетна</a></li>
         <li className="li2"> <a href="#" className="a2">За нас</a> </li>
          <li className="li3"> <a href="#" className="a3">Автобуски Станици</a> </li>
          <li className="li4"> <a href="#" className="a4">Возен ред</a> </li>
             </ul> 
             &nbsp;    
             <div>
             <h3 class="second">Пребарување на возни линии кои тргнуваат од Скопје </h3>
             </div>
           
             
             <div className="malavtobus">
             </div>
             &nbsp;
       
        <form className="formm">
        <label>
        <img src={LittleBus} className="smallpicture"></img>
    <select value={this.state.value} id="select" className="selected" onChange={this.handleChange}>
     <option disabled selected value>Pick a destination</option>
     <option value="skopje">Скопје</option>             
    <option value="strumica">Струмица</option>
    <option value="bitola">Битола</option>
     <option value="ohrid">Охрид</option>
          </select>
        </label>
        <input type="button" className="button" value="Search" onClick={this.handleSubmit}/>
      </form>
    
      <table className="tabela">
  <tr>
    <th>Град</th>
    <th>Автобуска Линија</th>
    <th>Денови на Поаѓање </th>
    <th>Време</th>
   
  </tr>
       
        {items.City.map(item => (
          
          <tr>
            <td key={item.cityID}>
              {item.cityName} 
              </td>
              <td key={item.cityID}>
              {item.CityLine}
              </td>
              <td key={item.cityID}>
              {item.CityDays}
              </td>
              <td key={item.cityID}>
              {item.CityTime}
              </td>
              
          </tr>

            ))}
          
  </table>

        </div>
          

          
        );
      }


     
}
  
    }
       
    

   




export default Json;