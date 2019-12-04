import React, { Component } from 'react';
import './App.css'
import firebase from "firebase";


let dictionary ={
  "Скопје" : "Skopje",
  "Струмица" : "Strumica",
  "Битола" : "Bitola",
  "Охрид" : "Ohrid",
  "Демир Хисар" : "Demir Hisar",
  "Дебар" : "Debar",
  "Гевгелија" : "Gevgelija",
  "Гостивар" : "Gostivar",
  "Кавадарци" : "Kavadarci",
  "Кичево" : "Kicevo",
  "Кочани" : "Kocani",
  "Крива Паланка" : "Kriva Palanka",
  "Крушево" : "Krusevo",
  "Куманово" : "Kumanovo",
  "Неготино" : "Negotino",
  "Прилеп" : "Prilep",
  "Пробиштип" : "Probistip",
  "Радовиш" : "Radovis",
  "Ресен" : "Resen",
  "Штип" : "Stip",
  "Струга" : "Struga",
  "Свети Николе" : "Sveti Nikole",
  "Тетово" : "Tetovo",
  "Велес" : "Veles",


}
class Form extends Component {
     constructor(props){
               super(props)
                    this.handleSubmit = this.handleSubmit.bind(this);
                    this.handleChange = this.handleChange.bind(this);
                   
                              }

     handleSubmit(event) {
      event.preventDefault();
      
         let db = firebase.firestore();
         let CurrentValue = document.getElementById("select").value;
         let CurrentValue1 = document.getElementById("select1").value;
         let CityRef3 = db.collection(dictionary[CurrentValue]).doc(dictionary[CurrentValue1]).collection("Route1");
         const CityList = document.querySelector('.tabela');
      
function ReadCity(doc){

let tr1 = document.createElement('tr');
let tr = document.createElement('tr');

let Trgnuvanje = document.createElement('td')
let Pristignuvanje = document.createElement('td')
let Prevoznik = document.createElement('td')
let EdnaNasoka = document.createElement('td')
let Povraten = document.createElement('td')
let Denovi = document.createElement('td')

let Trgnuvanje1 = document.createElement('th')
let Pristignuvanje1 = document.createElement('th')
let Prevoznik1 = document.createElement('th')
let EdnaNasoka1= document.createElement('th')
let Povraten1 = document.createElement('th')
let Denovi1 = document.createElement('th')

tr1.setAttribute('data-id', doc.id)
Trgnuvanje1.textContent = "Тргнување";
Pristignuvanje1.textContent = "Пристигнување";
Prevoznik1.textContent = "Превозник"
EdnaNasoka1.textContent = "Една Насока";
Povraten1.textContent = "Повратен";
Denovi1.textContent = "Денови";

tr1.appendChild(Trgnuvanje1);
tr1.appendChild(Pristignuvanje1);
tr1.appendChild(Prevoznik1);
tr1.appendChild(EdnaNasoka1);
tr1.appendChild(Povraten1);
tr1.appendChild(Denovi1);



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
CityList.appendChild(tr1);
CityList.appendChild(tr);
        }
      
       CityRef3.get().then((snapshot) => {
          CityList.innerHTML ="";

          snapshot.docs.forEach(doc => {
            ReadCity(doc);
           
          
        });
      }) ;
      
   
    
    
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