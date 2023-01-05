import React from "react";
import axios from "axios";

class ChangePhoto extends React.Component{
    constructor(){
        super()
        this.state = {
            src : "", userid : ""
        }
    }
    change = (e) => {
        this.setState ({
            [e.target.name] : [e.target.file]
        })
    }
    submit = (e) => {
        e.preventDefault();
        let id = localStorage.getItem("Userid")
        let myid = parseInt (JSON.parse(id))
        this.setState ({
            userid : myid
        })
        console.log (myid);
        let formdata = new FormData();
        formdata.append ("st_id",this.state.userid)
        formdata.append ("st_photo",this.state.src)
        axios.post (res => {
            console.log(res)
        })
        

    }
    render(){
        return(
            <>
            {this.state.userid}
            {this.state.src}
                <h2> Update Photo </h2>
                <input type="file" name="src" onChange = {this.change.bind(this)}/>
                <input type = "button"  value = "Update" onClick = {this.submit.bind(this)}/> 
            </>
        )
    }
}

export default ChangePhoto; 