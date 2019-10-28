import React from 'react';
import Bus from "./logo_bemidjibus.png";
import LittleBus from "./32x32_1.gif";
import './App.css';
import BusStation from "./BusStation.jpg";
import Facebook from "./icons8-facebook-64.png";
import Instagram from "./icons8-instagram-64.png";
import firebase from "firebase";




class Project extends React.Component{
  
    constructor(props){
    
      
      super(props);
        
         this.state={             
          isLoaded: false, 
          selectedCity: "",
          selectedDays: "",
          selectedLine: "",
          selectedTime: ""
           
      };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveData = this.saveData.bind(this);
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
    const CityRef =  db.collection("buslines").doc("Skopje");
    const CityRef1 = db.collection("buslines").doc("Strumica");
    const CityRef2 = db.collection("buslines").doc("Bitola");
    const CityRef3 = db.collection("buslines").doc("Ohrid");
    const CityRef4 = db.collection("buslines").doc("Prilep");
    const CityRef5 = db.collection("buslines").doc("Gevgelija");
    const CityRef6 = db.collection("buslines").doc("Berovo");


     this.setState ({
                  isLoaded:true,
                  items: CityRef,
                  items1:CityRef1,
                  items2:CityRef2,
                  items3:CityRef3,
                  items4:CityRef4,
                  items5:CityRef5,
                  items6:CityRef6
                               })
  
                               };


                  
      handleSubmit(event) {

      event.preventDefault();
      
     let db = firebase.firestore();
     let CityRef =  db.collection("buslines").doc("Skopje");
     let CityRef1 =  db.collection("buslines").doc("Strumica");
     let CityRef2 = db.collection("buslines").doc("Bitola");
     let CityRef3 = db.collection("buslines").doc("Ohrid");
     let CityRef4 = db.collection("buslines").doc("Prilep");
     let CityRef5 = db.collection("buslines").doc("Gevgelija");
     let CityRef6 = db.collection("buslines").doc("Berovo");
     let CurrentValue = document.getElementById("select").value;

    
      if(CurrentValue==="Skopje"){  
      CityRef.get().then(function(doc) {
        if (doc.exists) {
       document.getElementById("Error").style.display="none";
       document.getElementById("table-display1").innerHTML = doc.data().CityName;
       document.getElementById("table-display2").innerHTML = doc.data().CityLine;
       document.getElementById("table-display3").innerHTML = doc.data().CityDays;
       document.getElementById("table-display4").innerHTML = doc.data().CityTime;
         
      } else {
           
          document.getElementById("Error").innerHTML = "Error"
        }
    })

  }

  if(CurrentValue==="Strumica"){
    CityRef1.get().then(function(doc) {
      if (doc.exists) {

        document.getElementById("Error").style.display="none";
        document.getElementById("table-display1").innerHTML = doc.data().CityName1;
        document.getElementById("table-display2").innerHTML = doc.data().CityLine1;
        document.getElementById("table-display3").innerHTML = doc.data().CityDays1;
        document.getElementById("table-display4").innerHTML = doc.data().CityTime1;
      } else {

        document.getElementById("Error").innerHTML = "Error"
      }
  })

}


if(CurrentValue==="Bitola"){
  CityRef2.get().then(function(doc) {
    if (doc.exists) {
      document.getElementById("Error").style.display="none";
      document.getElementById("table-display1").innerHTML = doc.data().CityName2;
      document.getElementById("table-display2").innerHTML = doc.data().CityLine2;
      document.getElementById("table-display3").innerHTML = doc.data().CityDays2;
      document.getElementById("table-display4").innerHTML = doc.data().CityTime2;
    } else {
        
      document.getElementById("Error").innerHTML = "Error"
    }
})

}

if(CurrentValue==="Ohrid"){
  CityRef3.get().then(function(doc) {
    if (doc.exists) {
      document.getElementById("Error").style.display="none";
      document.getElementById("table-display1").innerHTML = doc.data().CityName3;
      document.getElementById("table-display2").innerHTML = doc.data().CityLine3;
      document.getElementById("table-display3").innerHTML = doc.data().CityDays3;
      document.getElementById("table-display4").innerHTML = doc.data().CityTime3;
    } else {
        
      document.getElementById("Error").innerHTML = "Error"
    }
})

}

if(CurrentValue==="Prilep"){
  CityRef4.get().then(function(doc) {
    if (doc.exists) {
      document.getElementById("Error").style.display="none";
      document.getElementById("table-display1").innerHTML = doc.data().CityName4;
      document.getElementById("table-display2").innerHTML = doc.data().CityLine4;
      document.getElementById("table-display3").innerHTML = doc.data().CityDays4;
      document.getElementById("table-display4").innerHTML = doc.data().CityTime4;
    } else {
        
      document.getElementById("Error").innerHTML = "Error"
    }
})

}

if(CurrentValue==="Gevgelija"){
  CityRef5.get().then(function(doc) {
    if (doc.exists) {
      document.getElementById("Error").style.display="none";
       document.getElementById("table-display1").innerHTML = doc.data().CityName5;
       document.getElementById("table-display2").innerHTML = doc.data().CityLine5;
       document.getElementById("table-display3").innerHTML = doc.data().CityDays5;
       document.getElementById("table-display4").innerHTML = doc.data().CityTime5;
    } else {
        
      document.getElementById("Error").innerHTML = "Error"
    }
})

}

if(CurrentValue==="Berovo"){
  CityRef6.get().then(function(doc) {
    if (doc.exists) {
      document.getElementById("Error").style.display="none";
      document.getElementById("table-display1").innerHTML = doc.data().CityName6;
      document.getElementById("table-display2").innerHTML = doc.data().CityLine6;
      document.getElementById("table-display3").innerHTML = doc.data().CityDays6;
      document.getElementById("table-display4").innerHTML = doc.data().CityTime6;
    } else {
        
      document.getElementById("Error").innerHTML = "Error"
    }
})

}
  
      
  }


   DeleteData(){
    
    let OptionValue = document.getElementById("select").value;
    if(OptionValue ==="Skopje" || OptionValue==="Strumica" || OptionValue==="Bitola" || OptionValue==="Ohrid" )
    {
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

  Edit(){
  let db = firebase.firestore();
  let ButtonSave = document.getElementById("button2");
  ButtonSave.style.display="block";
  
  document.getElementById("button2").style.display="block";  
   document.getElementById("TxtValue").value="";
   document.getElementById("TxtValue1").value="";
  document.getElementById("TxtValue2").value="";
   document.getElementById("TxtValue3").value="";
   document.getElementById("TxtValue5").value="";
  document.getElementById("TxtValue6").value="";
  db.collection("BiletRegistration").doc("BiletRegistration").set({
    TipPatuvanje: document.getElementById("TxtValue1").value,
    MestoPoaganje:  document.getElementById("TxtValue3").value,
    Destinacija: document.getElementById("TxtValue2").value,
    Poaganje: document.getElementById("TxtValue").value,
    Vreme: document.getElementById("TxtValue5").value,
    BrojPatnici: document.getElementById("TxtValue6").value
    
})

    } 

    saveData(){
   let db = firebase.firestore();
   var TipPatuvanje =  document.getElementById("TxtValue1").value;
   var MestoPoaganje = document.getElementById("TxtValue3").value;
   var Destinacija = document.getElementById("TxtValue2").value;
   var Poaganje = document.getElementById("TxtValue").value;
   var Vreme = document.getElementById("TxtValue5").value;
   var BrojPatnici = document.getElementById("TxtValue6").value;
     
   db.collection("BiletRegistration").doc("BiletRegistration").set({
    TipPatuvanje: TipPatuvanje,
    MestoPoaganje: MestoPoaganje,
    Destinacija: Destinacija,
    Poaganje: Poaganje,
    Vreme: Vreme,
    BrojPatnici: BrojPatnici
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

    }


    render() {
        
      var  { isLoaded } = this.state;
      
    
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
     <option value="Skopje">Скопје</option>             
    <option value="Strumica">Струмица</option>
    <option value="Bitola">Битола</option>
    <option value="Ohrid">Охрид</option>

    </select>
    <br/>
Дестинација : <select id="TxtValue3" className="modal-select2" required>
    <option disabled selected value>Одберете дестинација</option>       
    <option value="Strumica">Струмица</option>
    <option value="Bitola">Битола</option>
    <option value="Ohrid">Охрид</option>
    <option value="Prilep">Прилеп</option>             
    <option value="Struga">Струга</option>
    <option value="Berovo">Берово</option>
    <option value="Gevgelija">Гевгелија</option>
    </select>

    <br/>
    Поаѓање : <input type="date" id="TxtValue" required></input><br/>
    Време : <select id="TxtValue5" className="modal-select3" required>
    <option value>00:00</option>
    <option value="00:00">00:00</option>             
    <option value="01:00">01:00</option>
    <option value="02:00">02:00</option>
    <option value="03:00">03:00</option>
    <option value="04:00">04:00</option>             
    <option value="05:00">05:00</option>
    <option value="06:00">06:00</option>
    <option value="07:00">07:00</option>
    <option value="08:00">08:00</option>
    <option value="09:00">09:00</option>             
    <option value="10:00">10:00</option>
    <option value="11:00">11:00</option>
    <option value="12:00">12:00</option>
    <option value="13:00">13:00</option>             
    <option value="14:00">14:00</option>
    <option value="15:00">15:00</option>
    <option value="16:00">16:00</option>
    <option value="17:00">17:00</option>
    <option value="18:00">18:00</option>             
    <option value="19:00">19:00</option>
    <option value="20:00">20:00</option>
    <option value="21:00">21:00</option>
    <option value="22:00">22:00</option>             
    <option value="23:00">23:00</option>
    
</select>
<br/>
Број на патници : <input type="number" id="TxtValue6" required min="1" max="55"></input><br/>

</div>

  <div className="modal-footer">
    
  <button className="button1" onClick={this.saveData} >Резервирај</button>
  <button className="button3" onClick={this.Edit}>Ажурирај</button>
  <button id="button2" onClick={this.saveData}>Зачувај</button>


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