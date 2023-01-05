import React from "react";
import axios from "axios";

export default function ForgotpassH () {
     const [email,setemail] = React.useState ("")
     const change = (e) => {
        setemail (e.target.value)
        console.log(email)
     }
     const submit = (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("st_email",email)
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
    return (
        <>
            <h1> Forgot pass</h1>
                Email : <input type="email" name = "email" onChange={change}/>
                <input type="button" value="Submit" onClick={submit}  />
        </>
    )
}