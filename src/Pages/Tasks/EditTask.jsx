import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Input,
} from '@mui/material';
import TaskDataService from './../../../Config/Service/task.service';
import Nav from '../../Components/BottomNavigation';
import Navbar from './../../Components/Atoms/NavBAr';

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  

  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    TaskDataService.get(id)
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar la tarea:', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleUpdateTask = () => {
    TaskDataService.update(id, task)
      .then(() => {
        console.log('Tarea actualizada con éxito');
        navigate('/tasks');
      })
      .catch((error) => {
        console.error('Error al actualizar la tarea:', error);
      });
  };

  if (!task) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Editar Tarea
        </Typography>
        <Card>
          <CardContent>
            <form>
              <TextField
                label="Título"
                variant="outlined"
                fullWidth
                name="title"
                value={task.title}
                onChange={handleInputChange}
                required
              />
              <TextField
                label="Descripción"
                variant="outlined"
                fullWidth
                multiline
                name="description"
                value={task.description}
                onChange={handleInputChange}
                required
                sx={{ marginTop: '1rem'}}
              />
              
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateTask}
              >
                Guardar Cambios
              </Button>
              <Link to="/tasks" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" color="primary">
                  Cancelar
                </Button>
              </Link>
            </form>
          </CardContent>
        </Card>
      </Container>
      <Nav />
    </>
  );
}
