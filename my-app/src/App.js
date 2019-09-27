import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Bus from "./logo_bemidjibus.png"
import Macedonia from "./macedonia_flag.png"
import GreatBritain from "./united_kingdom_great_britain.png"
import LittleBus from "./32x32_1.gif"


class App extends React.Component{
    constructor(props){
        super(props);
         this.state={             
           cityName:"",
           cityLine:"",
           cityDays:"",
           cityTime:""   
           
      };
      
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }  
    
    handleChange(event) {
      this.setState({value: event.target.value}); 

 
      
      }

      handleSubmit(event) {
        event.preventDefault();
  
       if(this.state.value == "skopje" ){
          this.setState({cityName: "Skopje", cityLine:"44,33,22,11", cityDays: "Monday,Thursday,Friday", cityTime: "09:00-09:45,10:00-10:45"});
        } else {
           
        }
       if(this.state.value =="strumica"){
        this.setState({cityName: "Strumica", cityLine:"2, 6, 23", cityDays: "Wednesday,Saturday,Sunday", cityTime: "12:00-12:45,13:00-13:45"});
       } else {
          
       }
         
       if(this.state.value =="bitola"){
        this.setState({cityName: "Bitola", cityLine:"7,20,24,25", cityDays: "Wednesday,Friday,Sunday", cityTime: "12:00-12:45,13:00-13:45"});
       } else {
         
       }

       if(this.state.value =="ohrid"){
        this.setState({cityName: "Ohrid", cityLine:"7, 20", cityDays: "Monday,Friday", cityTime: "14:00-14:45,15:00-15:45"});
       } else {

       }

      }
      

    render() {
      
     
       
     
     return(
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
  <tr>
  <td id="demo">{this.state.cityName}</td>    
    <td id="demo1">{this.state.cityLine}</td>
     <td id="demo2">{this.state.cityDays}</td>
    <td id="demo3">{this.state.cityTime}</td>
  </tr>
  
  </table>



    </div>   
       );
}
   

}


export default App;