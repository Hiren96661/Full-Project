import React from "react";

export default function HomePageH () {
    const [value,setvalue] = React.useState({ Username : "" })

   React.useEffect (() => {
    let myname = localStorage.getItem("Username");
    setvalue ({
        Username : myname , 
    })
   
   },[])
    return (
         <>
            <h1> Welcome to {value.Username}</h1> 
         </>
    )
}