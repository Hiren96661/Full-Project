import React from "react";
import axios from "axios";
import { click } from "@testing-library/user-event/dist/click";

export default function LogoutH() {
    const [value,setvalue] = React.useState({
        userid : "",
    })
   const click = (e) => {
        e.preventDefault();
        let id = (localStorage.getItem("Userid"))
        let myid = parseInt(JSON.parse(id))
        console.log(myid)
        setvalue ({
            userid : myid
        })
        let formData = new FormData();
        formData.append("st_id",value.userid)
        axios.post ("https://akashsir.in/myapi/crud/student-logout-api.php",formData)
        .then (res => {
            console.log(res)
            if (res.data.flag === "1"){
                localStorage.removeItem("Userid");
                localStorage.removeItem("Username");
            }
            
        })

    }
    return (
        <>
            <h1> Logout Page </h1>
            <input type="button" value="Logout" onClick={click} />
        </>
    )
}
