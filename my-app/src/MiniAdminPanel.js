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
    this.UpdateData = this.UpdateData.bind(this);
    this.DeleteData = this.DeleteData.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
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
      let button = document.getElementById("button3");
      let CurrentValue = document.getElementById("select").value;


      if(CurrentValue)
      {
        console.log(this.state.items)
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
          selectedCity:  this.state.items.City[i].CityName1, 
          selectedLine:  this.state.items.City[i].CityLine1, 
          selectedDays:  this.state.items.City[i].CityDays1,
          selectedTime:  this.state.items.City[i].CityTime1 
        });
       
      }

      else if(CurrentValue === this.state.items.City[i].CityName2)
       {
        document.getElementById("Error").style.display="none";
        this.setState({ 
          selectedCity:  this.state.items.City[i].CityName2, 
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



     UpdateData() {
        let TextValue  = document.getElementById("TxtValue").value;
        let TextValue1 = document.getElementById("TxtValue1").value;
        let TextValue2 = document.getElementById("TxtValue2").value;
        let TextValue3 = document.getElementById("TxtValue3").value;
        let i;

        

          if(TextValue != "") {
            console.log(this.state.items)
           for(let i=0;i<this.state.items.City.length;i++){
            this.state.items.City[i].CityName = TextValue;
           }
          
          }
           if(TextValue1 != ""){
   
            for(let i=0;i<this.state.items.City.length;i++){
              this.state.items.City[i].CityLine = TextValue1;
             }
          }

           if(TextValue2 != ""){
            
            for(let i=0;i<this.state.items.City.length;i++){
              this.state.items.City[i].CityDays = TextValue2;
             }
          }

           if(TextValue3 != ""){
      
            for(let i=0;i<this.state.items.City.length;i++){
              this.state.items.City[i].CityTime = TextValue3;
             }
          }
              else{
              
              }
        } 


        DeleteData(){
                let OptionValue = document.getElementById("select").value;
                
                if(OptionValue ==="Skopje" || OptionValue==="Strumica" || OptionValue==="Bitola" || OptionValue==="Ohrid" ){
                     this.setState({
                            selectedCity: "",
                            selectedLine: "",
                            selectedDays: "",
                            selectedTime: ""

                     })

                } else {
                    
                }
               
}

displayForm(){
  let TextValue  = document.getElementById("TxtValue") .value;
  let TextValue1 = document.getElementById("TxtValue1").value;
  let TextValue2 = document.getElementById("TxtValue2").value;
  let TextValue3 = document.getElementById("TxtValue3").value;
  let i;

    if(TextValue != "") {
      
     for(let i=0;i<this.state.items.City.length;i++){
      this.state.items.City[i].CityName = TextValue;
     }
    
    }
     if(TextValue1 != ""){

      for(let i=0;i<this.state.items.City.length;i++){
        this.state.items.City[i].CityLine = TextValue1;
       }
    }

     if(TextValue2 != ""){
      
      for(let i=0;i<this.state.items.City.length;i++){
        this.state.items.City[i].CityDays = TextValue2;
       }
    }

     if(TextValue3 != ""){

      for(let i=0;i<this.state.items.City.length;i++){
        this.state.items.City[i].CityTime = TextValue3;
       }
    }
        else{
        
        }
  } 


open(){
  let modal = document.getElementById("myModal");
  modal.style.display="block";
  }
  close(){
   
    let modal = document.getElementById("myModal");
    modal.style.display="none"  
  }

    close1(){
  let TextValue  = document.getElementById("TxtValue") .value="";
  let TextValue1 = document.getElementById("TxtValue1").value="";
  let TextValue2 = document.getElementById("TxtValue2").value="";
  let TextValue3 = document.getElementById("TxtValue3").value="";
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
        <input type="button" className="myBtn" value="Edit" onClick={this.open}/>
       
        
        
      </form>
    
      <table className="tabela">

  <tr>
    <th>City</th>
    <th> CityLine</th>
    <th>Days </th>
    <th>Time</th>
  
  </tr>
  
  <tr>
          <td>{this.state.selectedCity} </td>
          <td>{this.state.selectedLine} </td>
          <td>{this.state.selectedDays} </td>
          <td>{this.state.selectedTime} </td>
         
 </tr> 
    
 </table>
 
<h1 id="Error"></h1>

&nbsp;




  <div id="myModal" className="modal">

<div className="modal-content">
  <span className="close">&times;</span>
  
</div>

<div className="modal-content">
  <div className="modal-header">
    <span className="close" onClick={this.close}>&times;</span>
    <h2>Edit</h2>
  </div>

  <div className="modal-body">
City Name: <input type="text" id="TxtValue"></input><br/>
City Line: &nbsp; <input type="text" id="TxtValue1"></input><br/>
City Days: <input type="text" id="TxtValue2"></input><br/>
City Time: <input type="text" id="TxtValue3"></input><br/>
  </div>

  <div className="modal-footer">
    
  <button className="button1" onClick={this.UpdateData} >Save</button>
  <button className="button3" onClick={this.close1}>Delete</button>

  </div>

</div>

</div>

        </div>
      
      


        );

      }

    
     
}
    
    
}
   




export default Json;