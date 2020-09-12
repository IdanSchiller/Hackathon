import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardHeader
  } from 'reactstrap';
import sub1events from "./EventsData.json"
import "./Sliders.css"


export default class Sliders extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            backgroundColor: "white",
            
          };
        return (
            <div className="sliderDiv">
            <h1 style={{textAlign:"left"}}>Subject No. 1 Events</h1>
            <Slider {...settings} >
            {sub1events.map(function(event) {
              return (
                    
                <Card className="card">
              <CardHeader style={{border: "1.5px solid black"}}>Event Name: {event.name}</CardHeader>
        <CardBody style={{border: "1.5px solid black"}}>
          <CardText>Place: {event.place}</CardText>
          <CardText>Time: {event.start}:00-{event.end}:00</CardText>
          <Button>Join Event</Button>
        </CardBody>
      </Card>
                
                )})
            }
            </Slider>

            </div>
        )
    }
}
