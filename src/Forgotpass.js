import React from "react";
import axios from "axios";

class Forgotpass extends React.Component{
    constructor(){
        super()
        this.state = {
            email : ""
        }
    }
    change = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    submit = (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("st_email",this.state.email)
        axios.post ("https://akashsir.in/myapi/crud/student-forgot-password-api.php",formdata)
        .then(res => {
            console.log(res)
            if (res.data.flag === "1"){
                var msg = res.data.message
                alert (msg)
            }  if(res.data.flag === "0") {
                var fmsg = res.data.message
                alert (fmsg)
            }
        })
    }
    render(){
        return(
            <>
                <h1> Forgot pass</h1>
                Email : <input type="email" name = "email" onChange={this.change.bind(this)}/>
                <input type="button" value="Submit" onClick={this.submit.bind(this)}  />

            </>
        )
    }
}

export default Forgotpass;