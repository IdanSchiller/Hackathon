import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxlh5M1eBIzNKbU89V3CBZZO5voizXmKI",
    authDomain: "idan-hack-bgu.firebaseapp.com",
    databaseURL: "https://idan-hack-bgu.firebaseio.com",
    projectId: "idan-hack-bgu",
    storageBucket: "idan-hack-bgu.appspot.com",
    messagingSenderId: "743325028480",
    appId: "1:743325028480:web:3d46efe710739e8901d665"
  };


  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


  export default firebaseConfig;