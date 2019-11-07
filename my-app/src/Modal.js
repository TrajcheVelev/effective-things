import React, { Component } from 'react';
import firebase from "firebase";




class Modal extends Component {
constructor(props){
  super(props)
 
  this.close = this.close.bind(this);
  this.saveData = this.saveData.bind(this);
  
}

Edit(){
  
  let db = firebase.firestore();
  var EnterID = prompt("Enter your ID");
  let CollectionRef = db.collection("BiletRegistration");

 
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
    document.getElementById("TxtValue5").value = Vreme;
    document.getElementById("TxtValue6").value = BrojPatnici;
    document.getElementById("TxtValue").value  = Poaganje
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
         if(doc.exists){
           BiletID = BiletID + 1;
           } else{}
       
     })
         db.collection("BiletRegistration").add({
         BiletID: BiletID ,
         TipPatuvanje: TipPatuvanje,
         MestoPoaganje: MestoPoaganje,
         Destinacija: Destinacija,
         Poaganje: Poaganje,
         Vreme: Vreme,
         BrojPatnici: BrojPatnici
     })  


   })
 }

close() {
     
      let modal = document.getElementById("myModal");
      modal.style.display="none"  
    }


    
  render() {
      return(
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
    
    </div>
  
  </div>
      )
  }
}

export default Modal;
