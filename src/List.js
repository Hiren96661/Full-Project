import axios from "axios";
import React from "react";

export default class List extends React.Component {
    constructor (){
        super ()
        this.state = {
            mydata : []
        }
    }
    componentDidMount = () => {
        axios.get ()
    }
    render () {
        return (
            <>

            </>
        )
    }
}