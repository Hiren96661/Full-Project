import axios from "axios";
import React from "react";

export default function LoginH (){
    const [values,setvalues] = React.useState ({email : "", password : ""});

     const change = (e) => {
        const {name,value} = e.target;
        setvalues ({
            ...values, [name] : value
        })
     }
     const submit = (e) => {
        e.preventDefault();
        let formData = new FormData ();
        formData.append ("st_email",values.email)
        formData.append ("st_password",values.password)
        axios.post ("https://akashsir.in/myapi/crud/student-login-api.php",formData)
        .then (res => {
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
    return (
        <>
            <h1> Login Page </h1>
                <form onSubmit={submit}>
                   Email : <input type="email" name = "email" onChange={change}/>
                   Password : <input type="password" name = "password" onChange={change}/>
                   <input type = "submit" value="Login"/>
                </form>
        </>
    )
}