import React from "react";
import axios from "axios";

class Password extends React.Component{
    constructor(){
        super()
        this.state = {
            oldpass : "", newpass : "", confirmpass : "", userid : ""
        }
    }
    change = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }
    submit = (e) => {
        e.preventDefault();
        let id = (localStorage.getItem("Userid"))
        let myid = parseInt(JSON.parse(id))

        console.log(myid)
        this.setState ({
            userid : myid
        })
        let formData = new FormData();
        formData.append("st_id",this.state.userid)
        formData.append("opass",this.state.oldpass)
        formData.append("npass",this.state.newpass)
        formData.append("cpass",this.state.confirmpass)
        axios.post ("https://akashsir.in/myapi/crud/student-change-password-api.php",formData)
        
        .then (res => {
            console.log(res)
            if (res.data.flag === "1"){       
                var msg = res.data.message;
                alert (msg)
            } if (res.data.flag === "0") {
                alert (msg)
            }
            
        })

    }

    render(){
        return(
            <>
                <h1> Change Password </h1>
               <h2> Userid : {this.state.userid} </h2>  
               
                Old Password : <input type="password" name= "oldpass" onChange={this.change.bind(this)}/> <br/>
                New Password : <input type="password" name= "newpass" onChange={this.change.bind(this)}/> <br/>
                Confirm Password : <input type="password" name= "confirmpass" onChange={this.change.bind(this)}/> <br/>
                <input type="button" value = "Submit" onClick={this.submit.bind(this)}/>
            </>
        )
    }
}

export default Password;