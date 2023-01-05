import React from "react"
import axios from "axios"

class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {
           name : "", gender : "", email : "", mobileno : "", password : ""
        }
    }
    change = (e) => {
        this.setState ({
            [e.target.name] : [e.target.value]
        })
    }

    submit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append ("st_name",this.state.name)
        formData.append ("st_gender",this.state.gender)
        formData.append ("st_email",this.state.email)
        formData.append ("st_mobileno",this.state.mobileno)
        formData.append ("st_password",this.state.password)

        axios.post ("https://akashsir.in/myapi/crud/student-add-api.php",formData)
        .then (res => {
            console.log (res)
            if (res.data.flag === "1"){
                let msg = res.data.message;
                alert (msg)
                
                this.setState ({
                    name : "", gender : "", email : "", mobileno : "", password : "" 
                }) 
                e.preventDefault();
            }  

        })  
    }
    
    render(){
        return(
            <>
                <h1> SignUp Form </h1>
                <form onSubmit={this.submit.bind(this)}>
                   Name : <input type="text" name = "name" onChange={this.change.bind(this)}/> <br/> 
                   Gender : <input type="text" name = "gender" onChange={this.change.bind(this)} /> <br/>
                   Email : <input type="email" name = "email" onChange={this.change.bind(this)} /> <br/>
                   Mobile_No. : <input type="number" name = "mobileno" onChange={this.change.bind(this)} /> <br/>
                   Password : <input type="text" name = "password" onChange={this.change.bind(this)} /> <br/>
                    <input type="submit" value= "Submit Data"/>
                </form>

            </>
        )
    }
}

export default SignUp;