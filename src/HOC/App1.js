import React from "react";
import EnhancedComponent from "./HOC";

class App1 extends React.Component {
    render (){
        return 
        <h1> {this.props.name}</h1>
    }
}

export default EnhancedComponent(App1);