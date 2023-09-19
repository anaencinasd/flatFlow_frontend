import { Container } from "@mui/material";
import Header from "../Components/Atoms/Header";
import Nav from "../Components/BottomNavigation";
import Navbar from "../Components/Atoms/NavBAr";




export default function Dashboard() {
  return (
    <>
    <Navbar />
    <Header 
      title="Dashboard"
      subtitle="Ruta ok"/>
    <Container>
      

    </Container>
    <Nav />
    </>
  )
}