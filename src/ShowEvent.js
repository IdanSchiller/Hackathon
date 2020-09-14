import React, { Component } from 'react'
import queryString from "query-string" 

export default class ShowEvent extends Component {
    constructor(props){
        super(props);
        this.state={
            name:""
        }

    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        this.setState({name:values[0]})
    }

    render() {
        return (
            <div>
                <h1>hello {this.state.name}</h1>
            </div>
        )
    }
}
