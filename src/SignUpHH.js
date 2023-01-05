import axios from 'axios';
import React from 'react';

export default function SignUpHH () {
    const [values, setvalues] = React.useState({  name : "", gender : "", email : "", mobileno : "", password : "" })
    const change = (e) => {
        const [name,value] = e.target;
        setvalues ({
            ...values, [name] : value
        })
    }
    const submit = () => {
        e.preventDefault();
        let formData = new FormData ();
        formData.append ("st_name",values.namee)
        formData.append ("st_gender",values.gender)
        formData.append ("st_email",values.email)
        formData.append ("st_mobileno",values.mobileno)
        formData.append ("st_password",values.password)
        axios.post ("https://akashsir.in/myapi/crud/student-add-api.php",formData)
        .then (res => {
            
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
                    <input type="submit" value= "Submit Data"/>
                </form> 
        </>
    )
}
