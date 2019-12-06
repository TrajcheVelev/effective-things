import React, { Component } from 'react';
import Modal from "./Modal"
import Footer from "./Footer"
import './App.css';
import firebase from "firebase";
import Form from "./Form";
import Table from "./Table";
import SlideShow from './SlideShow';
import Header from "./Header";



class Project extends Component{
  
    constructor(props){
      
      super(props);
        
         this.state = {             
          isLoaded:  false, 
          
           
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
  
   this.setState ({
                  isLoaded:true,
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