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

       let CurrentValue = document.getElementById("select").value;

      if(CurrentValue)
      {
        for(let i = 0; i<this.state.items.City.length; i++)

      {
            if(CurrentValue === this.state.items.City[i].CityName)

       {
            document.getElementById("Error").style.display="none";
          this.setState ({ 
          selectedCity:  this.state.items.City[i].CityName, 
          selectedLine:  this.state.items.City[i].CityLine, 
          selectedDays:  this.state.items.City[i].CityDays,
          selectedTime:  this.state.items.City[i].CityTime 
         });
       
      }
      
      else if(CurrentValue === this.state.items.City[i].CityName1)
       {
        document.getElementById("Error").style.display="none";
        this.setState({ 
          selectedCity:  this.state.items.City[i].CityName1 , 
          selectedLine:  this.state.items.City[i].CityLine1, 
          selectedDays:  this.state.items.City[i].CityDays1,
          selectedTime:  this.state.items.City[i].CityTime1 
        });
       
      }

      else if(CurrentValue === this.state.items.City[i].CityName2)
       {
        document.getElementById("Error").style.display="none";
        this.setState({ 
          selectedCity: this.state.items.City[i].CityName2 , 
          selectedLine:  this.state.items.City[i].CityLine2, 
          selectedDays:  this.state.items.City[i].CityDays2,
          selectedTime:  this.state.items.City[i].CityTime2 
        });
       
      }

      else if(CurrentValue === this.state.items.City[i].CityName3)
       {
        document.getElementById("Error").style.display="none";
        this.setState({ 
          selectedCity:  this.state.items.City[i].CityName3, 
          selectedLine:  this.state.items.City[i].CityLine3, 
          selectedDays:  this.state.items.City[i].CityDays3,
          selectedTime:  this.state.items.City[i].CityTime3
        });
       
       }
      
      else {
        
          document.getElementById("Error").innerHTML = "Error"

      }

      

      }
      }
       

         }
                
            
     
      render() {
        
      var  { isLoaded } = this.state;
      let i;
    
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
             <h3 className="second">Пребарување на возни линии кои тргнуваат од Скопје </h3>
             </div>
           
             
             <div className="malavtobus">
             </div>
             &nbsp;
       
        <form className="formm">
        <label>
        <img src={LittleBus} className="smallpicture"></img>
    <select id="select" className="selected" onChange={this.handleChange}>
     <option disabled selected value>Pick a destination</option>
     <option value="Skopje">Скопје</option>             
    <option value="Strumica">Струмица</option>
    <option value="Bitola">Битола</option>
     <option value="Ohrid">Охрид</option>
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
          <td>{this.state.selectedCity} </td>
          <td>{this.state.selectedLine} </td>
          <td>{this.state.selectedDays} </td>
          <td>{this.state.selectedTime} </td>
 </tr> 
    
 </table>

<h1 id="Error"></h1>

        </div>
          

        );

      }


     
}
  
    }
       
    

   




export default Json;