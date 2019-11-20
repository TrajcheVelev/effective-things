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
         let CityRef =  db.collection("Skopje").doc("Strumica").collection("Route1");
         let CityRef1 =  db.collection("Skopje").doc("Krusevo").collection("Route1");
         let CityRef2 =  db.collection("Skopje").doc("Debar").collection("Route1");
         let CurrentValue = document.getElementById("select").value;
         let CurrentValue1 = document.getElementById("select1").value;
        
         const CityList = document.querySelector('#tableheader');

function ReadCity(doc){
  //constructor da se proba

let tr = document.createElement('tr');

  

   let Trgnuvanje = document.createElement('td')
   let Pristignuvanje = document.createElement('td')
   let Prevoznik = document.createElement('td')
   let EdnaNasoka = document.createElement('td')
   let Povraten = document.createElement('td')
   let Denovi = document.createElement('td')

tr.setAttribute('data-id', doc.id)

Trgnuvanje.textContent = doc.data().Trgnuvanje;
Pristignuvanje.textContent = doc.data().Pristignuvanje;
Prevoznik.textContent = doc.data().Prevoznik;
EdnaNasoka.textContent = doc.data().EdnaNasoka;
Povraten.textContent = doc.data().Povraten;
Denovi.textContent = doc.data().Denovi;

tr.appendChild(Trgnuvanje);
tr.appendChild(Pristignuvanje);
tr.appendChild(Prevoznik);
tr.appendChild(EdnaNasoka);
tr.appendChild(Povraten);
tr.appendChild(Denovi);

 CityList.appendChild(tr)
        }
        
        if(CurrentValue ==="Скопје" && CurrentValue1==="Струмица"){
        CityRef.get().then((snapshot) => {
          snapshot.docs.forEach(doc => {
            ReadCity(doc)
           
          
        })
      }) 
      
    } else{
          
    }
   if(CurrentValue ==="Скопје" && CurrentValue1==="Крушево"){
      CityRef1.get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          ReadCity(doc)
         
        
      })
    }) 
  }

 if(CurrentValue ==="Скопје" && CurrentValue1==="Дебар"){
    CityRef2.get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        ReadCity(doc)
       
      
    })
  }) 
}

        



      
        

       
        /*
if(CurrentValue==="Skopje" && CurrentValue1==="Strumica"){  
        CityRef.get().then(function(querySnapshot)  {
          querySnapshot.forEach(function(doc) {
             if(doc("Strumica")){
               
               var CityRefcollection = db.collection("Route1");
                      CityRefcollection.get().then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                             var Denovi = doc.data().Denovi;
                             var EdnaNasoka = doc.data().EdnaNasoka;
                             var Povraten = doc.data().Povraten;
                             var Prevoznik = doc.data().Prevoznik;
                             var Pristignuvanje = doc.data().Pristignuvanje;
                             var Trgnuvanje = doc.data().Trgnuvanje;
                             document.getElementById("table-display1").value = Denovi;
                             document.getElementById("table-display4").innerHTML = EdnaNasoka;
                             document.getElementById("table-display5").innerHTML = Povraten;
                             document.getElementById("table-display6").innerHTML = Prevoznik;
                             document.getElementById("table-display1").innerHTML = CurrentValue;
              document.getElementById("table-display2").innerHTML = CurrentValue1;
console.log(doc.data())

                              })
 })
        
              
             
      
}
          })

       })
      }



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