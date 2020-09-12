import React, { Component } from 'react'
import Form from "./Form"
import Sliders from './Sliders'
import "./Main.css"

export default class Main extends Component {
    render() {

        return (
            <div>
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


