import React, { useState, useEffect } from 'react';
import TaskDataService from './../../../Config/Service/task.service'; 
import GenericCard from './../../Components/Atoms/Card'; 
import { Container, Button } from '@mui/material';
import Header from '../../Components/Atoms/Header';
import Nav from '../../Components/BottomNavigation';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function IndexTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    TaskDataService.getTasks()
      .then((response) => {
        console.log('Datos exportados correctamente', response.data);
        setTasks(response.data.data);
      })
      .catch((error) => {
        console.error('Error al cargar las tareas:', error);
      });
  }, []);
  

  return (
    <>
    <Header 
    title='Todas las tareas'/>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {tasks.map((task) => (
        <GenericCard
          key={task.id}
          dataService={TaskDataService}
          id={task.id}
          titleField="title"
          descriptionField="description"
          userField="id_user"
          link={`/taskdetail/${task.id}`}
        />
        
        
      ))}
      <Link to="/newtask">
      <Button variant="contained" color="primary">
        <AddIcon />
        Añadir Nueva Tarea
      </Button>
    </Link>
    <Link to="/tasks">
      <Button variant="contained" color="primary">
        <AddIcon />
        Ver mis tareas pendientes
      </Button>
    </Link>
      </Container>
      <Nav />
    </>
  );
}

export default IndexTask;
