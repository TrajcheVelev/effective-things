import React, { Component } from 'react';
import Modal from "./Modal"
import Footer from "./Footer"
import './App.css';
import BusStation from "./BusStation.jpg";
import firebase from "firebase";







class Project extends Component{
  
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
     let CityRef1 = db.collection("buslines").doc("Strumica");
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

if(CurrentValue==="Prilep")
{
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

if(CurrentValue==="Gevgelija") {
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
   var EnterID = prompt("Enter your ID");
   let CollectionRef = db.collection("BiletRegistration");
   document.getElementById("button2").style.display="block";
  
  CollectionRef.get().then(function(querySnapshot)  {
    querySnapshot.forEach(function(doc) {
      var BiletID = doc.data().BiletID;
      var TipPatuvanje = doc.data().TipPatuvanje;
      var MestoPoaganje = doc.data(). MestoPoaganje;
      var Destinacija = doc.data().Destinacija;
      var Vreme = doc.data().Vreme;
      var BrojPatnici = doc.data().BrojPatnici;
      var Poaganje = doc.data().Poaganje;

     if(EnterID == BiletID) {
      
     document.getElementById("TxtValue1").value = TipPatuvanje;
     document.getElementById("TxtValue3").value = MestoPoaganje;
     document.getElementById("TxtValue2").value = Destinacija;
     document.getElementById("TxtValue5").value  = Vreme;
     document.getElementById("TxtValue6").value  = BrojPatnici;
     document.getElementById("TxtValue").value = Poaganje

     }

    })

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
   var BiletID = 1;

   
  db.collection("BiletRegistration").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          db.collection("BiletRegistration").add({
            BiletID: BiletID ,
            TipPatuvanje: TipPatuvanje,
            MestoPoaganje: MestoPoaganje,
            Destinacija: Destinacija,
            Poaganje: Poaganje,
            Vreme: Vreme,
            BrojPatnici: BrojPatnici
        })  
  



        if(doc.exists){
            BiletID = BiletID + 1;
            
          
        } else{
          
        }
        
         })


    })
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
<Modal saveData={this.saveData}  close={this.close} Edit={this.Edit} />
</form>

</div>

<footer> 

 <Footer/>

 </footer>

 </div>
      
        );

     }

    
     }
    
    
}


   

export default Project;