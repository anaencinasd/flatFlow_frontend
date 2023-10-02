import React, { useState, useEffect } from 'react';
import TaskDataService from './../../../Config/Service/task.service'; 
import GenericCard from './../../Components/Atoms/Card'; 
import { Container, Button } from '@mui/material';
import Header from '../../Components/Atoms/Header';
import Nav from '../../Components/BottomNavigation';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Navbar from './../../Components/Atoms/NavBAr';


function IndexTask() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    TaskDataService.getAll()
      .then((response) => {
        console.log('Datos exportados correctamente', response.data);
        setTasks(response.data.data);
      })
      .catch((error) => {
        console.error('Error al cargar las tareas:', error);
      });
  }, []);

  const handleDeleteTask = (taskId) => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar esta tarea?");
  
    if (confirmDelete) {
      TaskDataService.delete(taskId)
        .then((response) => {
          console.log("Tarea eliminada con éxito");
          
          setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        })
        .catch((error) => {
          console.error("Error al eliminar la tarea:", error);
        });
    }
  };

  const handleEditTask = (taskId) => {
      navigate(`/edit-task/${taskId}`);
  };
  

  return (
    <>
   <Navbar />
    <Header 
    title='Tus tareas pendientes'/>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Link to="/newtask">
      <Button variant="outlined" color="primary">
        <AddIcon />
        Añadir Nueva Tarea
      </Button>
    </Link>
    <Link to="/alltasks">
      <Button variant="contained" color="primary">
        <AddIcon />
       Ver todas las tareas
      </Button>
    </Link>
      {tasks.map((task) => (
        <GenericCard
          key={task.id}
          dataService={TaskDataService}
          id={task.id}
          titleField="title"
          descriptionField="description"
          statusField={task.id_status} 
          userField="id_user"
          link={`/taskdetail/${task.id}`}
          label="Asignada a"
          onDelete={() => handleDeleteTask(task.id)} 
      onEdit={() => handleEditTask(task.id)}  
        />
        
        
      ))}
      
      </Container>
      <Nav />
    </>
  );
}

export default IndexTask;
