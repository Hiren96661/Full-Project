import React from "react";
import axios from "axios";

class Edit extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "", gender : "", email : "", mobileno : "" ,userid : ""
        }
    }
    change = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }
    componentDidMount(){
        let id = localStorage.getItem("Userid");
        let myid = parseInt(JSON.parse(id));
        
        axios.get(`https://akashsir.in/myapi/crud/student-detail-api.php?st_id=${myid}`)
        .then( res =>{
            let uniqueid = res.data
            let nm = res.data.st_name
            let gn = res.data.st_gender
            let em = res.data.st_email
            let mn = res.data.st_mobileno
            this.setState({
                userid : uniqueid,
                name : nm,
                gender : gn,
                email : em,
                mobileno : mn,
            })
        })
    }
    submit = (e) => {
        e.preventDefault();
        let id = localStorage.getItem("Userid");
        let myid = parseInt(JSON.parse(id));
        this.setState({
            userid : myid,
        })
        
        let formdata = new FormData();
        formdata.append("st_id",this.state.userid)
        formdata.append("st_name",this.state.name)
        formdata.append("st_gender",this.state.gender)
        formdata.append("st_email",this.state.email)
        formdata.append("st_mobileno",this.state.mobileno)
        
        axios.post("https://akashsir.in/myapi/crud/student-edit-api.php",formdata)
        .then(res =>{
            console.log(res)
        })
    }
    render(){
        return(
            <>
                <h1> Update Profile </h1>
                    Name : <input type="text" name = "name" value = {this.state.name} onChange = {this.change.bind(this)} />  
                    Gender : <input type="text" name = "gender" value = {this.state.gender} onChange = {this.change.bind(this)}/>  
                    Email : <input type="email" name = "email" value = {this.state.email} onChange = {this.change.bind(this)}/>    
                    Mobile No. : <input type="number" name = "mobileno" value = {this.state.mobileno} onChange = {this.change.bind(this)}/>  
                
                {/* User Id : <input type = "text" value={this.state.userid}/> */}
                
                <input type="button" value= "Update Profile" onClick = {this.submit.bind(this)} />
            </>
        )
    }
}

export default Edit;