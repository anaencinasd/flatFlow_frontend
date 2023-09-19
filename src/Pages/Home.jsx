import { Link } from "react-router-dom";
import './../css/home.css'
import { Button, Typography } from "@mui/material";


function Home() {
  return (
    
    <div className="landingBody">
       <div className="brandLanding">
       <Typography variant="h1">FLAT FLOW</Typography> 
       </div>
       <div className="slogan">
        <h3 id='H3landing'>Live. Share. flow.</h3>

       </div>

       <div className="buttonsContainer">
       

        <Link to="/login"><Button variant="contained" size="large" >Login</Button></Link>
        <Link to="/register"><Button variant="outlined" size="large" >Regístrate</Button></Link>

       </div>
       </div>
       
      

     
    
  );

 
    
}

export default Home;
