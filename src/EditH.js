import React from "react";
import axios from "axios";

export default function EditH () {
    const [values,setvalues] = React.useState ({
    namee : "", gender : "", email : "", mobileno : "" ,userid : ""  
    })
    const change = (e) => {
        const {name,value} = e.target;
        setvalues ({
            ...values, [name] : value
        })
    }
    React.useEffect (()=> {
        let id = localStorage.getItem("Userid");
        let myid = parseInt(JSON.parse(id));
        
        axios.get(`https://akashsir.in/myapi/crud/student-detail-api.php?st_id=${myid}`)
        .then( res =>{
            let uniqueid = res.data
            let nm = res.data.st_name
            let gn = res.data.st_gender
            let em = res.data.st_email
            let mn = res.data.st_mobileno
            setvalues({
                userid : uniqueid,
                namee : nm,
                gender : gn,
                email : em,
                mobileno : mn,
            })
        })
    },[])
    const submit = (e) => {
        e.preventDefault();
        let id = localStorage.getItem("Userid");
        let myid = parseInt(JSON.parse(id));
        setvalues({
            userid : myid,
        })
        
        let formdata = new FormData();
        formdata.append("st_id",values.userid)
        formdata.append("st_name",values.namee)
        formdata.append("st_gender",values.gender)
        formdata.append("st_email",values.email)
        formdata.append("st_mobileno",values.mobileno)
        
        axios.post("https://akashsir.in/myapi/crud/student-edit-api.php",formdata)
        .then(res =>{
            console.log(res)
        })
    }
    return (
        <>
            <h1> Update Profile </h1>
                    Name : <input type="text" name = "namee" value = {values.namee} onChange = {change} />  
                    Gender : <input type="text" name = "gender" value = {values.gender} onChange = {change}/>  
                    Email : <input type="email" name = "email" value = {values.email} onChange = {change}/>    
                    Mobile No. : <input type="number" name = "mobileno" value = {values.mobileno} onChange = {change}/>  
                
                {/* User Id : <input type = "text" value={this.state.userid}/> */}
                
                <input type="button" value= "Update Profile" onClick = {submit} />
        </>
    )
}