
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import TaskDataService from './../../../Config/Service/task.service'; 
import Nav from '../../Components/BottomNavigation';
import NavBar from "./../../Components/Atoms/NavBAr"

export default function ShowTask() {

  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    
    TaskDataService.get(id)
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar la tarea:', error);
      });
  }, [id]);

  if (!task) {
    return <div>Cargando...</div>;
  }

  
  return (
    <>
    <NavBar />
    <Container>
      <Typography variant="h4" gutterBottom>
        Detalles de la Tarea
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {task.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {task.description}
          </Typography>
          <Link to="/tasks">
            <Button variant="contained" color="primary">
              Volver a la Lista de Tareas
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
    <Nav />
    </>
  );
}


    

