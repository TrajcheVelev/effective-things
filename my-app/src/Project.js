import React from 'react';
import Bus from "./logo_bemidjibus.png";
import LittleBus from "./32x32_1.gif";
import './App.css';
import BusStation from "./BusStation.jpg";
import Facebook from "./icons8-facebook-64.png";
import Instagram from "./icons8-instagram-64.png";
import firebase from "firebase";
import firestore from "firestore";




class Project extends React.Component{
  
    constructor(props){
    
      
        super(props);
        
         this.state={             
          isLoaded: false, 
          items:""
           
      };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   // this.UpdateData = this.UpdateData.bind(this);
    this.DeleteData = this.DeleteData.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  
    }  
    
    handleChange(event) {
      this.setState({value: event.target.value}); 
  }

  componentDidMount(){

    const  config = {
      apiKey: "AIzaSyDKbhgZS63rJNHjsGh2L1SzbDITShP4FMY",
      authDomain: "project-busline.firebaseapp.com",
      databaseURL: "https://project-busline.firebaseio.com",
      projectId: "project-busline",
      storageBucket: "project-busline.appspot.com",
      messagingSenderId: "65583259218",
      appId: "1:65583259218:web:37712df044986298b1098b",
      measurementId: "G-V24XMS3NFH"
    };

    firebase.initializeApp(config);
    const db = firebase.firestore();
    

  const CityRef = db.collection("buslines");
  this.setState ({
    isLoaded:true,
    items: CityRef
  })
  
  };



      handleSubmit(event) {
      event.preventDefault();
      
      let CurrentValue = document.getElementById("select").value;
      

     
    if(CurrentValue === this.state.items.CityName)

       {
            document.getElementById("Error").style.display="none";
          this.setState ({ 
          selectedCity:  this.state.items.CityName, 
          selectedLine:  this.state.items.CityLine, 
          selectedDays:  this.state.items.CityDays,
          selectedTime:  this.state.items.CityTime 
         });
       
      }
      
      else if(CurrentValue === this.state.items.CityName1)
       {
        document.getElementById("Error").style.display="none";
        this.setState({ 
          selectedCity:  this.state.items.CityName1, 
          selectedLine:  this.state.items.CityLine1, 
          selectedDays:  this.state.items.CityDays1,
          selectedTime:  this.state.items.CityTime1 
        });
       
      }

      else if(CurrentValue === this.state.items.CityName2)
       {
        document.getElementById("Error").style.display="none";
        this.setState({ 
          selectedCity:  this.state.items.CityName2, 
          selectedLine:  this.state.items.CityLine2, 
          selectedDays:  this.state.items.CityDays2,
          selectedTime:  this.state.items.CityTime2 
        });
       
      }

      else if(CurrentValue === this.state.items.CityName3)
       {
        document.getElementById("Error").style.display="none";
        this.setState({ 
          selectedCity:  this.state.items.CityName3, 
          selectedLine:  this.state.items.CityLine3, 
          selectedDays:  this.state.items.CityDays3,
          selectedTime:  this.state.items.CityTime3 
        });
       
       }

       else if(CurrentValue === this.state.items.CityName4)
       {
        document.getElementById("Error").style.display="none";
        this.setState({ 
          selectedCity:  this.state.items.CityName4, 
          selectedLine:  this.state.items.CityLine4, 
          selectedDays:  this.state.items.CityDays4,
          selectedTime:  this.state.items.CityTime4 
        });
       
       }

       else if(CurrentValue === this.state.items.CityName5)
       {
        document.getElementById("Error").style.display="none";
        this.setState({ 
          selectedCity:  this.state.items.CityName5, 
          selectedLine:  this.state.items.CityLine5, 
          selectedDays:  this.state.items.CityDays5,
          selectedTime:  this.state.items.CityTime5 
        });
       
       }

       else if(CurrentValue === this.state.items.CityName6)
       {
        document.getElementById("Error").style.display="none";
        this.setState({ 
          selectedCity:  this.state.items.CityName6, 
          selectedLine:  this.state.items.CityLine6, 
          selectedDays:  this.state.items.CityDays6,
          selectedTime:  this.state.items.CityTime6 
        });
       
       }
      
      else {
        
          document.getElementById("Error").innerHTML = "Error"

      }

      

      
          
              }


/*
     UpdateData() {
        let TextValue4  = document.getElementById("TxtValue").value;
        let TextValue1 = document.getElementById("TxtValue1").value;
        let TextValue2 = document.getElementById("TxtValue2").value;
        let TextValue3 = document.getElementById("TxtValue3").value;
        let i;

        

          if(TextValue4 != "") {
          
           for(let i=0;i<this.state.items.City.length;i++){
            this.state.items.City[i].CityName = TextValue4;
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
*/

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



open(){
  let modal = document.getElementById("myModal");
  modal.style.display="block";
  }
  close(){
   
    let modal = document.getElementById("myModal");
    modal.style.display="none"  
  }

    close1(){
  let TextValue =  document.getElementById("TxtValue").value="";
  let TextValue1 = document.getElementById("TxtValue1").value="";
  let TextValue2 = document.getElementById("TxtValue2").value="";
  let TextValue3 = document.getElementById("TxtValue3").value="";
  let TextValue5 = document.getElementById("TxtValue5").value="";
  let TextValue6 = document.getElementById("TxtValue6").value="";
    } 
            
     
      render() {
        
      var  { isLoaded } = this.state;
      let i;
    
      if (!isLoaded) {
        return <div>Loading</div>;
      } else {
              
        return (
          <div className="container">
           
           <div class="w3-content w3-display-container">
           <img src={BusStation} className="Bus"></img>
</div>
       
              <div>
        
         </div>
          

         <br/>

        
<ul className="ull">
         <li className="li1"> <a href="#" className="a1">Почетна</a></li>
         <li className="li2"> <a href="#" className="a2">За нас</a> </li>
         <li className="li3"> <a href="#" className="a3">Автобуски Станици</a> </li>
         <li className="li4"> <a href="#" className="a4">Возен ред</a> </li>
         <li className="li5"> <a href="#" onClick={this.open} className="a4">Резервирај</a> </li>
         <input type="text" placeholder="Search.." className="searchbar"> 
          </input>
         
                      </ul> 
             
             
      <hr className="HR"></hr>

             <div>
             <h3 className="second">Пребарување на возни линии кои тргнуваат од Скопје </h3>
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
     <option value="Prilep">Прилеп</option>
     <option value="Gevgelija">Гевгелија</option>
     <option value="Berovo">Берово</option>
          </select>
        </label>
        <input type="button" className="button" id="button" value="Search" onClick={this.handleSubmit}/>
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
<form>
<div className="modal-content">
  <div className="modal-header">
    <span className="close" onClick={this.close}>&times;</span>
    <h2>Резервирај билет</h2>
  </div>

  <div className="modal-body">
Тип на патување : <select id="TxtValue1" className="modal-select" required>
     <option disabled selected value>Одберете тип</option>
     <option value="EdnaNasoka">Една насока</option>             
    <option value="PovratenOtvoren">Повратен отворен</option>
    </select>
    <br/>
Место на поаѓање : <select id="TxtValue2" className="modal-select1" required>
     <option disabled selected value>Одберете место</option>
     <option value="Sk">Скопје</option>             
    <option value="Sr">Струмица</option>
    <option value="Bt">Битола</option>
    <option value="Oh">Охрид</option>

    </select>
    <br/>
Дестинација : <select id="TxtValue3" className="modal-select2" required>
    <option disabled selected value>Одберете дестинација</option>       
    <option value="Sr">Струмица</option>
    <option value="Bt">Битола</option>
    <option value="Oh">Охрид</option>
    <option value="Pp">Прилеп</option>             
    <option value="Struga">Струга</option>
    <option value="Berovo">Берово</option>
    <option value="Gvg">Гевгелија</option>
    </select>

    <br/>
    Поаѓање : <input type="date" id="TxtValue" required></input><br/>
    Време : <select id="TxtValue5" className="modal-select3" required>
    <option value>00:00</option>
    <option value="0">00:00</option>             
    <option value="1">01:00</option>
    <option value="2">02:00</option>
    <option value="3">03:00</option>
    <option value="4">04:00</option>             
    <option value="5">05:00</option>
    <option value="6">06:00</option>
    <option value="7">07:00</option>
    <option value="8">08:00</option>
    <option value="9">09:00</option>             
    <option value="10">10:00</option>
    <option value="11">11:00</option>
    <option value="12">12:00</option>
    <option value="13">13:00</option>             
    <option value="14">14:00</option>
    <option value="15">15:00</option>
    <option value="16">16:00</option>
    <option value="17">17:00</option>
    <option value="18">18:00</option>             
    <option value="19">19:00</option>
    <option value="20">20:00</option>
    <option value="21">21:00</option>
    <option value="22">22:00</option>             
    <option value="23">23:00</option>
    
</select>
<br/>
Број на патници : <input type="number" id="TxtValue6" required min="1" max="55"></input><br/>

</div>

  <div className="modal-footer">
    
  <button className="button1" onClick={this.UpdateData} >Резервирај</button>
  <button className="button3" onClick={this.close1}>Избриши</button>

  </div>

</div>
</form>
</div>

<footer class="footer-distributed">
 
 <div class="footer-left">

 <h3>Vozen<span>Red</span></h3>

 <p class="footer-links">
 ·<a href="#">Home</a>

<br/>
·<a href="#">Blog</a>

<br/>
·<a href="#">Pricing</a>

<br/>
·<a href="#">About</a>

<br/>
·<a href="#">Faq</a>

<br/>
·<a href="#">Contact</a>
 </p>

 <p class="footer-company-name">VozenRed &copy; 2019</p>
 </div>

 <div class="footer-center">

 <div>
 <i class="fa fa-map-marker"></i>
 <p> Skopje, Macedonia</p>
 </div>

 <div>
 <i class="fa fa-phone"></i>
 <p>+389 (0)2 2123 342</p><br/>
 <p>Факс: +389 (0)2 2402 385</p>
 </div>

 <div>
 <i class="fa fa-envelope"></i>
 <p><a href="mailto:support@vozenred.com">contact@vozenred.com</a></p>
 </div>

 </div>

 <div class="footer-right">

 <p class="footer-company-about">
 <span>About</span>
Vozen Red helps people to see each cities bus lines that go from Skopje (CityLine,Days,Time)4
 </p>

 <div class="footer-icons">

 <a href="https://www.facebook.com"><i><img src={Facebook} className="facebook"></img></i></a> &nbsp;
 <a href="https://www.instagram.com"><i><img src={Instagram} className="instagram"></img></i></a>
 

 </div>
 <div class="footer-picture">
 <img src={Bus} className="MiniBus"></img>

 </div>

 </div>

 </footer>


  </div>
      
        );

     }

    
     }
    
    
}


   

export default Project;