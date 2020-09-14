import React from 'react'
import "./Header.css"
import {useAuth, useUser, AuthCheck,FirebaseAppProvider} from "reactfire"
import firebase from "firebase"
import firebaseConfig from "./FirebaseConfig"

export const appuser = useUser()

export default function Header() {
   const auth = useAuth();

  const signIn = () =>
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  const signOut = () => auth.signOut();

  return (
    <div className="header">
      <div className="logo">
        <a href="/" style={{ fontSize: 50, }}>Groupify</a>
        <a style={{ textAlign: "match-parent" }} >Idan Schiller | Master Grouper Level</a>
      </div>
      <div className="header-right">
        <a className="active" href="/">Home</a>
        <div>
        <AuthCheck
          fallback={
            <div>
            <button onClick={signIn}>Sign-In</button>
            </div>
          }
        >
          <div>
            Hello {appuser?.displayName}
            <button onClick={signOut}> Sign-out </button>
          </div>
        </AuthCheck>
      </div>

        <a href="#about">About</a>
      </div>
    </div>
  )
}
