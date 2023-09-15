import { Link } from "react-router-dom";


function Home() {
  return (
    <>
       <h1>hola</h1>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register">Register</Link>

     
    </>
  );

 
    
}

export default Home;
