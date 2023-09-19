
import TaskDataService from "../../../Config/Service/task.service";
import Nav from "../../Components/BottomNavigation";
import { useNavigate, Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import GenericForm from "../../Components/Atoms/Form";
import Header from "../../Components/Atoms/Header";

function TaskForm() {
  const taskFields = [
    { label: 'Tarea', name: 'title' },
    { label: 'Descripción', name: 'description', type: 'text' },
    { label: '¿A quién se la asignas?', name: 'id_user', type: 'text' },
    
  ];

   
    
    
    
  

  const navigate = useNavigate()


  const handleUserFormSuccess = (taskData) => {
    console.log('Tarea registrada con éxito:', taskData);
    
   
  };

  return (
    <>
    
<Header 
title='Agregar tarea'/>
<Container sx={{marginTop:'32px', textAlign:'center'}}>
      
    
      <GenericForm dataService={TaskDataService} fields={taskFields} button="Asignar tarea" onSuccess={handleUserFormSuccess} />
      <input type="hidden" name="id_status" value="1" />
      <Typography>
        Volver al  <Link to="/tasks">listado de tareas</Link>
      </Typography>
  </Container> 
  <Nav />
    </>
    
    
    

  
        
    
    
  );
}

export default TaskForm;

