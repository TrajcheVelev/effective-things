import React, { Component } from 'react';
import Modal from "./Modal"
import Footer from "./Footer"
import './App.css';
import firebase from "firebase";
import Form from "./Form";
import Table from "./Table";
import SlideShow from './SlideShow';
import Header from "./Header";
import Contact from "./Contact";


class Project extends Component{
  
    constructor(props){
      
      super(props);
        
         this.state = {             
          isLoaded:  false, 
          selectedCity: "",
          selectedDays: "",
          selectedLine: "",
          selectedTime: ""
           
      };
     
 
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

                               
     render() {
        
      var  { isLoaded } = this.state;
      if (!isLoaded) {
             return <div>Loading</div>;
                    } 
            else {
                    return (
          <div className="container">
           <Header open={this.props.open}/>
<SlideShow/>
          
  <br/>
  

             
<hr className="HR"></hr>
<br></br>
  <div>
        <h3 className="second">Пребарување на возни линии низ Република Северна Македонија </h3>
 </div>

        &nbsp;
      
           <Form handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange}/>
     

           <Table/>
 
        &nbsp;
 
<div id="myModal" className="modal">

<div className="modal-content">
<span className="close">&times;</span>
  </div>

<form>
<Modal saveData={this.props.saveData}  close={this.props.close} Edit={this.props.Edit} />
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