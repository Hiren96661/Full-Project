import React from "react";
import axios from "axios";

class Logout extends React.Component{
    constructor(){
        super()
        this.state = {
            userid : "",
        }
    }
    click = (e) => {
        e.preventDefault();
        let id = (localStorage.getItem("Userid"))
        let myid = parseInt(JSON.parse(id))
        console.log(myid)
        this.setState ({
            userid : myid
        })
        let formData = new FormData();
        formData.append("st_id",this.state.userid)
        axios.post ("https://akashsir.in/myapi/crud/student-logout-api.php",formData)
        .then (res => {
            console.log(res)
            if (res.data.flag === "1"){
                localStorage.removeItem("Userid");
                localStorage.removeItem("Username");
            }
            
        })

    }

    render(){
        return(
            <>
                <h1> Logout Page </h1>
                <input type="button" value="Logout" onClick={this.click.bind(this)} />
            </>
        )
    }
}

export default Logout;