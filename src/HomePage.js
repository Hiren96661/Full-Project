import React from "react";


class HomePage extends React.Component{
    constructor(){
        super()
        this.state = {
            Username : "", 
            // Userid : ""
        }
    }
    componentDidMount(){
        let myname = localStorage.getItem("Username")
        // let myid = localStorage.getItem("Userid")
        this.setState({
            Username : myname , 
            // Userid : myid
        })
    }
    render(){
        return(
            <>
             <h1> Welcome to {this.state.Username}</h1> 
          
               
            </>
        )
    }
}
export default HomePage;