import React, { Component } from 'react';
import './App.css'
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
         let CityRef =  db.collection("Skopje").doc("Strumica")
         let CurrentValue = document.getElementById("select").value;
         let CurrentValue1 = document.getElementById("select1").value;
         var CollectionBuslineRef = db.collection("buslines");
       
         if(CurrentValue){  
          CityRef.get().then(function(doc) {
            if (doc.exists) {
           
                            
                            document.getElementById("table-display3").innerHTML = doc.data().Trgnuvanje;
                            document.getElementById("table-display4").innerHTML = doc.data().Pristignuvanje;
                            document.getElementById("table-display5").innerHTML = doc.data().Prevoznik;
                            document.getElementById("table-display6").innerHTML = doc.data().EdnaNasoka;
                            document.getElementById("table-display7").innerHTML = doc.data().Povraten;
                            document.getElementById("table-display8").innerHTML = doc.data().Denovi;
                            } 
    
          else {
            document.getElementById("Error").innerHTML = "Error"
            }
    
        })
    
      }

        

        CollectionBuslineRef.get().then(function(querySnapshot)  {
          querySnapshot.forEach(function(doc) {
            if(CurrentValue && CurrentValue1){
               if(doc.exists){
         
            var TipPatuvanje = doc.data().TipPatuvanje;
            var MestoPoaganje = doc.data(). MestoPoaganje;
            var Destinacija = doc.data().Destinacija;
            var Vreme = doc.data().Vreme;
            var BrojPatnici = doc.data().BrojPatnici;
            var Poaganje = doc.data().Poaganje;
            var ContactNumber = doc.data().ContactNumber;
              
              document.getElementById("table-display1").innerHTML = CurrentValue;
              document.getElementById("table-display2").innerHTML = CurrentValue1;
              document.getElementById("table-display3").innerHTML = ContactNumber;
              document.getElementById("table-display4").innerHTML = Poaganje;
  
            
            
          }
}
          })

       })
        /*
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
      */
    
  }

  handleChange(event) {
     this.setState({value: event.target.value}); 
 }

render() {

     return (
<form className="formm">
  <label>
  
  <span className="pocetnadestinacija">Почетна дестинација :</span> <select id="select" className="selected" onChange={this.handleChange}>
  <option disabled selected value>Изберете дестинација</option>
  <option value="Скопје">Скопје</option>             
  <option value="Струмица">Струмица</option>
  <option value="Битола">Битола</option>
  <option value="Охрид">Охрид</option> 
  <option value="Прилеп">Прилеп</option>
  <option value="Гевгелија">Гевгелија</option>
  <option value="Берово">Берово</option>
  <option value="Дебар">Дебар</option>
  <option value="Демир Хисар">Демир Хисар</option>
  <option value="Гостивар">Гостивар</option>
  <option value="Кавадарци">Кавадарци</option>
  <option value="Кичево">Кичево</option>
  <option value="Кочани">Кочани</option>
  <option value="Крива Паланка">Крива Паланка</option>
  <option value="Крушево">Крушево</option>
  <option value="Куманово">Куманово</option>
  <option value="Неготино">Неготино</option>
  <option value="Пробиштип">Пробиштип</option>
  <option value="Радовиш">Радовиш</option>
  <option value="Ресен">Ресен</option>
  <option value="Штип">Штип</option>
  <option value="Струга">Струга</option>
  <option value="Свети Николе">Свети Николе</option>
  <option value="Тетово">Тетово</option>
  <option value="Велес">Велес</option>
          </select>
          
    </label>
<br/>
<br/>
<br/>
        <label>
  <span className="krajnadestinacija">Крајна дестинација : </span>  <select id="select1" className="selected1" onChange={this.handleChange}>
  <option disabled selected value>Изберете дестинација</option>
  <option value="Скопје">Скопје</option>             
  <option value="Струмица">Струмица</option>
  <option value="Битола">Битола</option>
  <option value="Охрид">Охрид</option> 
  <option value="Прилеп">Прилеп</option>
  <option value="Гевгелија">Гевгелија</option>
  <option value="Берово">Берово</option>
  <option value="Дебар">Дебар</option>
  <option value="Демир Хисар">Демир Хисар</option>
  <option value="Гостивар">Гостивар</option>
  <option value="Кавадарци">Кавадарци</option>
  <option value="Кичево">Кичево</option>
  <option value="Кочани">Кочани</option>
  <option value="Крива Паланка">Крива Паланка</option>
  <option value="Крушево">Крушево</option>
  <option value="Куманово">Куманово</option>
  <option value="Неготино">Неготино</option>
  <option value="Пробиштип">Пробиштип</option>
  <option value="Радовиш">Радовиш</option>
  <option value="Ресен">Ресен</option>
  <option value="Штип">Штип</option>
  <option value="Струга">Струга</option>
  <option value="Свети Николе">Свети Николе</option>
  <option value="Тетово">Тетово</option>
  <option value="Велес">Велес</option>
          </select>
        </label>
        <br></br>
        <input type="button" className="button" id="button" value="Search" onClick={this.handleSubmit}/>
</form>

     )

    }

}

export default Form;