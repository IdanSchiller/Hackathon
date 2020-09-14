import React, { Suspense } from 'react';
import './App.css';
import Main from "./Components/Main"
import Header from "./Header"
import firebaseConfig from "./FirebaseConfig"
import firebase from "firebase/app"
import {BrowserRouter as Router,
      Switch,
      Route,
      Link
} from 'react-router-dom'
import ShowEvent from "./ShowEvent"
import {useAuth, useUser, AuthCheck,FirebaseAppProvider} from "reactfire"



function App() {
  return (
    <FirebaseAppProvider firebaseConfig = {firebaseConfig}>
    <Suspense fallback={<div>Loading...</div>}>

    <div className="App">
    <element className="App-header">
<Header/>
</element>
      <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/showEvent" component={ShowEvent}/>
      </Switch>
      </Router>
    </div>
    </Suspense>
    </FirebaseAppProvider>
  );
}

export default App;


