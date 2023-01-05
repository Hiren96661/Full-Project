import React from "react";
import SignupH from "./SignupH";
import LoginH from "./LoginH";
import HomePageH from "./HomePageH";
import PasswordH from "./PasswordH";
import ForgotpassH from "./ForgotpassH";
import EditH from "./EditH";
import DeleteH from "./DeleteH";
import ChangePhoto from "./ChangePhoto";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Logout from "./Logout";

function App() {
  return (
    <>
      <Router>
        <Link to="/SignupH"> Home </Link> |
        <Link to ="/LoginH"> Login </Link> |
        <Link to = "/HomePageH"> HomePage</Link> |
        <Link to ="/PasswordH"> Password </Link> |
        <Link to = "/Logout"> Logout </Link> |
        <Link to = "/ForgotpassH"> Forgot Pass </Link> |
        <Link to = "/EditH"> Edit </Link> |
        <Link to = "/DeleteH"> Delete </Link> |
        <Link to = "/ChangePhoto"> Update Photo</Link> 
          <Routes>
             <Route path="/SignupH" element={<SignupH/>}/> 
             <Route path="/LoginH" element={<LoginH/>}/>
             <Route path="/HomePageH" element={<HomePageH/>}/>
             <Route path="/PasswordH" element= {<PasswordH/>}/>
             <Route path="/Logout" element = {<Logout/>} />
             <Route path="/ForgotpassH" element={<ForgotpassH/>}/>
             <Route path="/EditH" element={<EditH/>}/>
             <Route path="/DeleteH" element= {<DeleteH/>} />
             <Route path="/ChangePhoto" element= {<ChangePhoto/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
