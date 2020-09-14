import React, { Component, Suspense.useState } from 'react'
import { FirebaseAppProvider, useFirestore, useFirestoreCollectionData } from "reactfire";
import firebaseConfig from "../FirebaseConfig"
import firebase from "firebase/app"
import { v4 as uuidv4, stringify as uuidStringify, NIL as NIL_UUID } from 'uuid';
import { useAuth, useUser, AuthCheck } from "reactfire"
import appUser from "../FirebaseConfig"


export default function Form() {

    const [form, setValues] = useState({
        id: 0,
        name: '',
        start: '',
        end: '',
        date: '',
        online:false,
        place:'',
        maxPartic:0
       })
    // const [id, setID] = useState(NIL_UUID)
    // const [name, setName] = useState(NIL_UUID)
    // const [date, setID] = useState(NIL_UUID)
    // const [start, setID] = useState(NIL_UUID)
    // const [end, setID] = useState(NIL_UUID)
    // const [online, setID] = useState(NIL_UUID)
    // const [place, setID] = useState(NIL_UUID)
    // const [maxParticNum, setID] = useState(NIL_UUID)
    // const [particList, setID] = useState(NIL_UUID)
    // const [creator, setID] = useState(NIL_UUID)

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmmit = this.handleSubmmit.bind(this)

}

const handleChange(event){

    const { name, value } = event.target;
    this.setState({ [name]: value })

}
const handleSubmmit(e, appuser){
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    var stateWithID = { ...this.state }
    const newID = uuidv4();
    console.log(newID);
    // stateWithID.id= uuidStringify(newID);

    const myHookValue = this.props.myHookValue;
    stateWithID.creator = myHookValue;
    stateWithID.particList.push(this.props.appUser.displayName);



    db.collection("Events").add(stateWithID)
}





return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>

        <div>
            <h1>Create New Event</h1>
            <form onSubmit={this.handleSubmmit}>
                <input type="text" name="name" style={{ textAlign: "center" }} placeholder="Event Name" onChange={this.handleChange} /><br />
                <input type="text" name="date" style={{ textAlign: "center" }} placeholder="Date" onChange={this.handleChange} /><br />
                <input type="text" name="start" style={{ textAlign: "center" }} placeholder="Start Time" onChange={this.handleChange} /><br />
                <input type="text" name="end" style={{ textAlign: "center" }} placeholder="End Time" onChange={this.handleChange} /><br />
                <input type="text" name="place" style={{ textAlign: "center" }} placeholder="Place" onChange={this.handleChange} /><br />
                <input type="text" name="particNum" style={{ textAlign: "center" }} placeholder="Number of Participants " onChange={this.handleChange} /><br />
                <label for="courseName">Choose a Course:</label><br />
                <select type="text" id="courseName" name="courseName" style={{ textAlign: "center" }} placeholder="Course Name " onChange={this.handleChange}><br />
                    <option value="volvo">אלגברה</option>
                    <option value="saab">חדווא</option>
                    <option value="fiat">אינפי</option>
                    <option value="audi">כלכלה</option>
                </select><br />

                <button >Create New Event</button>
            </form>

        </div>
    </FirebaseAppProvider>

)



function H1() {
    const collection = useFirestore().collection('Events');
    const events = useFirestoreCollectionData(collection, { idField: 'id' })
    return (
        <h1>Create New Event {events}</h1>
    )
}


// <Suspense fallback={<div>loading...</div>}>
// <H1/>
// </Suspense>

export const ourUseUser = () => {
    const { user } = useUser()
    return user
}


function withMyHook(Component) {
    return function WrappedComponent(props) {
        const myHookValue = useUser();
        return <Component {...props} myHookValue={myHookValue} />;
    }
}

  export withMyHook(Form);
