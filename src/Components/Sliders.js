import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader
} from 'reactstrap';
import sub1events from "./EventsData.json"
import "./Sliders.css"
import firebase from "firebase/app"
import { FirebaseAppProvider, useFirestore, useFirestoreCollectionData } from "reactfire";
import firebaseConfig from "../FirebaseConfig"




export default class Sliders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: null

    }
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection("Events").get().then(snapshot => {
      const events = []
      snapshot.forEach(doc => {
        const data = doc.data()
        events.push(data)
      })
      this.setState({ events: events })
    })
  }

  componentDidUpdate(){
    this.componentDidMount()

  }


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      backgroundColor: "white",

    };
    //   const db = firebase.firestore();
    //   db.settings({timestampsInSnapshots: true});
    //   const evnArray = []
    // var events = db.collection("Events").get().then(res=>evnArray.concat(res))



    return (
      <div className="sliderDiv">
        <h1 style={{ textAlign: "left" }}>Subject No. 1 Events</h1>
        <Slider {...settings} >
          {
            this.state.events &&
            this.state.events.map(event => {
              return (
                <Card className="card">
                  <CardHeader style={{ border: "1.5px solid black" }}>Event Name: {event.name}</CardHeader>
                  <CardBody style={{ border: "1.5px solid black" }}>
                    <CardText>Place: {event.place}</CardText>
                    <CardText>Time: {event.start}:00-{event.end}:00</CardText>
                    <a href={`/showEvent?id=${event.id}`}>View Event</a>
                  </CardBody>
                </Card>

              )
            })
          }
        </Slider>

      </div>
    )
  }

}


export const useUser = () => {
  const { user } = useUser()
  return user
}

