import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardHeader
  } from 'reactstrap';
import firebase from "firebase/app"

  

export default class ShowEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            date: "",
            start: 0,
            end: 0,
            online: false,
            place: null,
            particNum: 0       
        }

    }

    async componentDidMount() {
        let search = window.location.search; // gets id parameter from URL
        let params = new URLSearchParams(search);
        let idFromParams = params.get('id');

        const db = firebase.firestore(); // gets the event's data from database
        const events = []
        await db.collection("Events").get().then(snapshot => {
          snapshot.forEach(doc => {
            const data = doc.data();
            // if(data.id===idFromParams)
                events.push(data)
          })
        });
    const eventToShow = events.filter(e=>e.id===idFromParams)[0]
    console.log(eventToShow)
    console.log(events)
    console.log("lenght: ",events.length)
    this.setState(eventToShow)
    }

    render() {
        return (
            <div>
            <h1>Event Name: {this.state.name}</h1>
            <p></p>
            <Card className="card">
            <CardHeader style={{ border: "1.5px solid black" }}>Event Name: {this.state.name}</CardHeader>
            <CardBody style={{ border: "1.5px solid black" }}>
              <CardText>Place: {this.state.place}</CardText>
              <CardText>Time: {this.state.start}:00-{this.state.end}:00</CardText>
              <a href={`/showEvent?id=${this.state.id}`}>Join Event</a>
            </CardBody>
          </Card>

            </div>
        )
    }
}
