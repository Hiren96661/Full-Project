import React from "react";
import axios from "axios";

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email : "", password : "",
        }
    }
    change = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }
    submit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append ("st_email",this.state.email)
        formData.append ("st_password",this.state.password)

        axios.post("https://akashsir.in/myapi/crud/student-login-api.php",formData)
        
        .then (res =>{
            if (res.data.flag === "1"){
                var msg = res.data.message;
                alert (msg)

                localStorage.setItem("Username",JSON.stringify(res.data.st_name))
                localStorage.setItem("Userid",JSON.stringify(res.data.st_id))
            } else if (res.data.flag === "0") {
                var fmsg = res.data.message;
                       alert (fmsg)
            }
        })
    }
    render(){
        return(
            <>
                <h1> Login Page </h1>
                <form onSubmit={this.submit.bind(this)}>
                   Email : <input type="email" name = "email" onChange={this.change.bind(this)}/>
                   Password : <input type="password" name = "password" onChange={this.change.bind(this)}/>
                   <input type = "submit" value="Login"/>
                </form>
            </>
        )
    }
}

export default Login;