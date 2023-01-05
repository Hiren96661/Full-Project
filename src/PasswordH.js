import React from "react";
import axios from "axios";

export default function PasswordH () {
    const [values,setvalues] = React.useState ({
        oldpass : "", newpass : "", confirmpass : "", userid : ""
    })
    const change = (e) => {
        const {name,value} = e.target;
        setvalues ({
            ...values, [name] : value
        })
    }
    const submit = (e) => {
        e.preventDefault();
        let id = (localStorage.getItem("Userid"))
        let myid = parseInt(JSON.parse(id))

        console.log(myid)
        setvalues ({
            userid : myid
        })
        let formData = new FormData();
        formData.append("st_id",values.userid)
        formData.append("opass",values.oldpass)
        formData.append("npass",values.newpass)
        formData.append("cpass",values.confirmpass)
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
    return (
        <>
            <h1> Change Password </h1>
               <h2> Userid : {values.userid} </h2>  
               
                Old Password : <input type="password" name= "oldpass" onChange={change}/> <br/>
                New Password : <input type="password" name= "newpass" onChange={change}/> <br/>
                Confirm Password : <input type="password" name= "confirmpass" onChange={change}/> <br/>
                <input type="button" value = "Submit" onClick={submit}/>
        </>
    )
}