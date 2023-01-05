import React from "react";
import axios from "axios";

export default function DeleteH () {
    const [values,setvalues] = React.useState ({userid : ""})

    React.useEffect (()=> {
        let id = localStorage.getItem("Userid");
        let myid = parseInt (JSON.parse(id));
        setvalues ({
            userid : myid,
        })
        console.log(myid);
    },[])
    const click = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("st_id",values.userid);
        axios.post ("https://akashsir.in/myapi/crud/student-delete-api.php",formData)
        .then (res => {
            console.log(res)
            if ( res.data.flag === "1"){
                let msg = res.data.message;
                alert (msg);
                localStorage.removeItem("Username");
                localStorage.removeItem("Userid");
            } else if (res.data.flag === "0"){
                let fmsg = res.data.message;
                alert(fmsg);
            }
        })
    }
    return (
        <>
            <h1> Delete Profile</h1>
                <input type="button" value="Delete Profile" onClick = {click} />
        </>
    )
}