
import ForumDataService from "../../../Config/Service/forum.service";
import Nav from "../../Components/BottomNavigation";
import { useNavigate, Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import GenericForm from "../../Components/Atoms/Form";
import Header from "../../Components/Atoms/Header";

function ForumForm() {
  const forumFields = [
    { label: 'Título', name: 'title' },
    { label: 'Mensaje', name: 'message' },
    { label: 'usuario', name: 'id_user' },

    
    
    
  ];

   
    
    
    
  

  const navigate = useNavigate()


  const handleUserFormSuccess = (forumData) => {
    console.log('Tarea registrada con éxito:', forumData);
    
   
  };

  return (
    <>
    
<Header 
title='Agregar tarea'/>
<Container sx={{marginTop:'32px', textAlign:'center'}}>
      
    
      <GenericForm dataService={ForumDataService} fields={forumFields} button="Dejar mensaje para el grupo" onSuccess={handleUserFormSuccess} />
      <input type="hidden" name="id_status" value="1" />
      <Typography>
        Volver al  <Link to="/forum">listado de mensajes</Link>
      </Typography>
  </Container> 
  <Nav />
    </>
  )
}

export default ForumForm;

    
    
    

  
        
    
    