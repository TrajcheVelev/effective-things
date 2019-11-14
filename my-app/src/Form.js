import React, { Component } from 'react';
import './App.css'
import LittleBus from "./32x32_1.gif"
import firebase from "firebase";

class Form extends Component {
     constructor(props){
               super(props)
                    this.handleSubmit = this.handleSubmit.bind(this);
                    this.handleChange = this.handleChange.bind(this);
                              }

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
           
                            document.getElementById("table-display1").innerHTML = doc.data().CityName;
                            document.getElementById("table-display2").innerHTML = doc.data().CityLine;
                            document.getElementById("table-display3").innerHTML = doc.data().CityDays;
                            document.getElementById("table-display4").innerHTML = doc.data().CityTime;
                            } 
    
          else {
            document.getElementById("Error").innerHTML = "Error"
            }
    
        })
    
      }
    
      if(CurrentValue==="Strumica"){
        CityRef1.get().then(function(doc) {
          if (doc.exists) {
    
                            document.getElementById("table-display1").innerHTML = doc.data().CityName1;
                            document.getElementById("table-display2").innerHTML = doc.data().CityLine1;
                            document.getElementById("table-display3").innerHTML = doc.data().CityDays1;
                            document.getElementById("table-display4").innerHTML = doc.data().CityTime1;
                          } 
          else {
            document.getElementById("Error").innerHTML = "Error"
          }
    
      })
    
    }
    
    
    if(CurrentValue==="Bitola"){
      CityRef2.get().then(function(doc) {
          if (doc.exists) {
         
                            document.getElementById("table-display1").innerHTML = doc.data().CityName2;
                            document.getElementById("table-display2").innerHTML = doc.data().CityLine2;
                            document.getElementById("table-display3").innerHTML = doc.data().CityDays2;
                            document.getElementById("table-display4").innerHTML = doc.data().CityTime2;
                          }
         else {
          document.getElementById("Error").innerHTML = "Error"
         }
    
    })
    
    }
    
    if(CurrentValue==="Ohrid"){
      CityRef3.get().then(function(doc) {
        if (doc.exists) {
          
                          document.getElementById("table-display1").innerHTML = doc.data().CityName3;
                          document.getElementById("table-display2").innerHTML = doc.data().CityLine3;
                          document.getElementById("table-display3").innerHTML = doc.data().CityDays3;
                          document.getElementById("table-display4").innerHTML = doc.data().CityTime3;
                        }
         else {
            document.getElementById("Error").innerHTML = "Error"
        }
    
    })
    
    }
    
    if(CurrentValue==="Prilep")
    {
      CityRef4.get().then(function(doc) {
        if (doc.exists) {
                          document.getElementById("table-display1").innerHTML = doc.data().CityName4;
                          document.getElementById("table-display2").innerHTML = doc.data().CityLine4;
                          document.getElementById("table-display3").innerHTML = doc.data().CityDays4;
                          document.getElementById("table-display4").innerHTML = doc.data().CityTime4;
                         } 
        else {
            document.getElementById("Error").innerHTML = "Error"
        }
    })
    
    }
    
    if(CurrentValue==="Gevgelija") {
      CityRef5.get().then(function(doc) {
        if (doc.exists) {
                        document.getElementById("table-display1").innerHTML = doc.data().CityName5;
                        document.getElementById("table-display2").innerHTML = doc.data().CityLine5;
                        document.getElementById("table-display3").innerHTML = doc.data().CityDays5;
                        document.getElementById("table-display4").innerHTML = doc.data().CityTime5;
                        } 
        else {
           document.getElementById("Error").innerHTML = "Error"
        }
    
    })
    
    }
    
    if(CurrentValue==="Berovo"){
      CityRef6.get().then(function(doc) {
        if (doc.exists) {
                        document.getElementById("table-display1").innerHTML = doc.data().CityName6;
                        document.getElementById("table-display2").innerHTML = doc.data().CityLine6;
                        document.getElementById("table-display3").innerHTML = doc.data().CityDays6;
                        document.getElementById("table-display4").innerHTML = doc.data().CityTime6;
                        }
         else {
           document.getElementById("Error").innerHTML = "Error"
        }
    
    })
    
    }
      
    }

  

    handleChange(event) {
     this.setState({value: event.target.value}); 
 }

render() {
     return (
<form className="formm">
  <label>
  <img src={LittleBus} className="smallpicture"></img>
  <select id="select" className="selected" onChange={this.handleChange}>
  <option disabled selected value>Изберете дестинација</option>
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

     )

    }

}

export default Form;