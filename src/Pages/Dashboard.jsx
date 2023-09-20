// import { Container } from "@mui/material";
// import Header from "../Components/Atoms/Header";
// import Nav from "../Components/BottomNavigation";
// import Navbar from "../Components/Atoms/NavBAr";




// export default function Dashboard() {
//   return (
//     <>
//     <Navbar />
//     <Header 
//       title="Dashboard"
//       subtitle="Ruta ok"/>
//     <Container>
      

//     </Container>
//     <Nav />
//     </>
//   )
// }

import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "../Components/Atoms/Header";
import UserDataService from "../../Config/Service/user.service";
import Navbar from "../Components/Atoms/NavBAr";
import Nav from "../Components/BottomNavigation";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    UserDataService.getUser()
      .then((response) => {
          setUser(response.data.data)
        
      })
      .catch((error) => {
        console.error("Error al obtener datos del usuario:", error);
      });
  }, []);

  return (
    <>
    <Navbar />
      
      <Header 
        subtitle={`Hola, ${user ? user.username : ""}`}
      />
      <Container>
        {/* Contenido del dashboard */}
      </Container>
      <Nav />
     
    </>
  );
}
