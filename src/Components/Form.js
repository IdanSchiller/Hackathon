import React, { Component,Suspense } from 'react'
import fs from "fs"
import sub1events from "./EventsData.json"
import {FirebaseAppProvider,useFirestore,useFirestoreCollectionData} from "reactfire";
import firebaseConfig from "../FirebaseConfig"
import addEvent from "./AsyncFuncs"
import firestore from "firestore"
import firebase from "firebase"


export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            date: "",
            start: 0,
            end: 0,
            online: false,
            place: null,
            particNum: 0        
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {} = event.target;
        this.setState( {  })
    }

    handleSubmmit(e){
        const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  const userRef = db.collection("Events").add({
    name:
  });  


        
    }
    

    render() {

        return (
            <FirebaseAppProvider firebaseConfig = {firebaseConfig}>

            <div>

                <form  onSubmit={this.handleSubmmit}>
                <input type="text" name="name"  style={{textAlign:"center"}} placeholder="Event Name" onChange={this.handleChange}/><br/>
                <input type="text" name="date" style={{textAlign:"center"}} placeholder="Date" onChange={this.handleChange}/><br/>
                <input type="text" name="start" style={{textAlign:"center"}} placeholder="Start Time" onChange={this.handleChange}/><br/>
                <input type="text" name="end" style={{textAlign:"center"}} placeholder="End Time" onChange={this.handleChange}/><br/>
                <input type="text" name="place"style={{textAlign:"center"}}  placeholder="Place" onChange={this.handleChange}/><br/>
                <input type="text" name="particNum"style={{textAlign:"center"}}  placeholder="Number of Participants " onChange={this.handleChange}/><br/>
                <button >Create New Event</button>  
                </form>
                
            </div>
            </FirebaseAppProvider>

        )
    }
}

function H1(){
    const collection =useFirestore().collection('Events');
    const events = useFirestoreCollectionData(collection,{idField: 'id'})
    return (
        <h1>Create New Event {events}</h1>
    )
}


// <Suspense fallback={<div>loading...</div>}>
// <H1/>
// </Suspense>
