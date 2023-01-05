import React from "react";
import axios from "axios";

class Delete extends React.Component{
    constructor (){
        super()
        this.state = {
            userid : "",
        }
    }
    componentDidMount(){
        let id = localStorage.getItem("Userid")
        let myid = parseInt (JSON.parse(id))
        this.setState ({
            userid : myid
        })
        console.log(myid)
    }
    click = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("st_id",this.state.userid);
        axios.post ("https://akashsir.in/myapi/crud/student-delete-api.php",formData)
        .then (res => {
            console.log(res)
            if ( res.data.flag === "1"){
                let msg = res.data.message;
                alert (msg);
                localStorage.removeItem("Username");
                localStorage.removeItem("Userid");
            } else if (res.data.flag === "0"){
                let fmsg = res.data.message;
                alert(fmsg);
            }
        })
    }   
    render (){
        return (
            <>
            
                <h1> Delete Profile</h1>
                <input type="button" value="Delete Profile" onClick = {this.click.bind(this)} />
            </>
        )
    }
}
export default Delete;
