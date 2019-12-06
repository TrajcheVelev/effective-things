import React, { Component } from 'react';
import './App.css'
import firebase from "firebase";


let dictionary = {
  "Скопје": "Skopje",
  "Струмица": "Strumica",
  "Битола": "Bitola",
  "Охрид": "Ohrid",
  "Демир Хисар": "Demir Hisar",
  "Дебар": "Debar",
  "Гевгелија": "Gevgelija",
  "Гостивар": "Gostivar",
  "Кавадарци": "Kavadarci",
  "Кичево": "Kicevo",
  "Кочани": "Kocani",
  "Крива Паланка": "Kriva Palanka",
  "Крушево": "Krusevo",
  "Куманово": "Kumanovo",
  "Неготино": "Negotino",
  "Прилеп": "Prilep",
  "Пробиштип": "Probistip",
  "Радовиш": "Radovis",
  "Ресен": "Resen",
  "Штип": "Stip",
  "Струга": "Struga",
  "Свети Николе": "Sveti Nikole",
  "Тетово": "Tetovo",
  "Велес": "Veles",


}
class Form extends Component {
  constructor(props) {
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

    function ReadCity(doc) {

      const tableformat ={
          tr1 : document.createElement('tr'),
          tr  : document.createElement('tr'),
          td : document.createElement("td"),
          td1 : document.createElement("td"),
          td2 : document.createElement("td"),
          td3 : document.createElement("td"),
          td4 : document.createElement("td"),
          td5 : document.createElement("td"),
          th : document.createElement("th"),
          th1 : document.createElement("th"),
          th2 : document.createElement("th"),
          th3 : document.createElement("th"),
          th4 : document.createElement("th"),
          th5 : document.createElement("th")
      }
      
      let trth1 = tableformat.tr1;
      let trtd = tableformat.tr;


      trth1.setAttribute('data-id', doc.id)
      tableformat.th.textContent = "Тргнување";
      tableformat.th1.textContent = "Пристигнување";
      tableformat.th2.textContent = "Превозник";
      tableformat.th3.textContent = "Една Насока";
      tableformat.th4.textContent = "Повратен";
      tableformat.th5.textContent = "Денови";

      trth1.appendChild(tableformat.th);
      trth1.appendChild(tableformat.th1);
      trth1.appendChild(tableformat.th2);
      trth1.appendChild(tableformat.th3);
      trth1.appendChild(tableformat.th4);
      trth1.appendChild(tableformat.th5);



      trtd.setAttribute('data-id', doc.id)

      tableformat.td.textContent = doc.data().Trgnuvanje;
      tableformat.td1.textContent = doc.data().Pristignuvanje;
      tableformat.td2.textContent = doc.data().Prevoznik;
      tableformat.td3.textContent = doc.data().EdnaNasoka;
      tableformat.td4.textContent = doc.data().Povraten;
      tableformat.td5.textContent = doc.data().Denovi;

      trtd.appendChild(tableformat.td);
      trtd.appendChild(tableformat.td1);
      trtd.appendChild(tableformat.td2);
      trtd.appendChild(tableformat.td3);
      trtd.appendChild(tableformat.td4);
      trtd.appendChild(tableformat.td5);
      
      CityList.appendChild(trth1);
      CityList.appendChild(trtd);
    }

    CityRef3.get().then((snapshot) => {
      CityList.innerHTML = "";

      snapshot.docs.forEach(doc => {
        ReadCity(doc);


      });
    });




  }


  handleChange(event) {
    this.setState({ value: event.target.value });
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
        <br />
        <br />
        <br />
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
        <input type="button" className="button" id="button" value="Search" onClick={this.handleSubmit} />
      </form>

    )

  }

}

export default Form;