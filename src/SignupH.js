import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";


function SignupH  () {
    const [values,setvalues] = React.useState({namee : "", gender : "", email : "", mobileno : "", password : ""});
    var navigate = useNavigate();
    const change = (e) => {
        const {name,value} = e.target;
        setvalues ({
            ...values, [name] : value
        })
    }
    const submit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append ("st_name",values.namee)
        formData.append ("st_gender",values.gender)
        formData.append ("st_email",values.email)
        formData.append ("st_mobileno",values.mobileno)
        formData.append ("st_password",values.password)

        axios.post ("https://akashsir.in/myapi/crud/student-add-api.php",formData)
        .then ( res => {
            console.log(res)
            if (res.data.flag === "1"){
                let msg = res.data.message;
                alert (msg)
                navigate("/LoginH")
                setvalues ({
                    name : "", gender : "", email : "", mobileno : "", password : "" 
                    })             
            } 
        })
    }
    return (
        <>
           <h1> SignUp Form </h1>
                <form onSubmit={submit}>
                   Name : <input type="text" name = "namee" onChange={change}/> <br/> 
                   Gender : <input type="text" name = "gender" onChange={change} /> <br/>
                   Email : <input type="email" name = "email" onChange={change} /> <br/>
                   Mobile_No. : <input type="number" name = "mobileno" onChange={change} /> <br/>
                   Password : <input type="text" name = "password" onChange={change} /> <br/>
                    <input type="submit" value= "Submit Data"  />
                </form> 
        </>
    )
}
export default SignupH;