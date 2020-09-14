import React, { Component } from 'react'
import Form from "./Form"
import Sliders from './Sliders'
import "./Main.css"
import {BrowserRouter as Router,Link} from 'react-router-dom'


export default class Main extends Component {
    render() {

        return (
            <div>
            <a href="/showEvent?name=idan">show event</a>
            <div className="wrapper" >
                <div className="formDiv" >
                    <Form className="formComp"/>
                    </div>
                    <div className="slidersDiv" >
                    <Sliders className="slidersComp" />
                    </div>
                </div>
            </div>
        )
    }
}


