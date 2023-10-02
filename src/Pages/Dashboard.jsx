import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import Header from "../Components/Atoms/Header";
import UserDataService from "../../Config/Service/user.service";
import TaskDataService from "../../Config/Service/task.service";
import ForumDataService from "../../Config/Service/forum.service";
import Navbar from "../Components/Atoms/NavBAr";
import Nav from "../Components/BottomNavigation";
import { Link } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useTheme } from '@mui/material/styles';
import { Padding } from "@mui/icons-material";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [forum, setForum] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    
    UserDataService.getUser()
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del usuario:", error);
      });

    
    TaskDataService.getTasks()
      .then((response) => {
        console.log('Datos exportados correctamente', response.data);
        const tasks = response.data.data.filter((task)=> task.id_status ===1 || task.id_status===2)
        const limitedPendingTasks = tasks.slice(0, 3);
        setTasks(limitedPendingTasks);
      })
      .catch((error) => {
        console.error('Error al cargar las tareas:', error);
      });

      ForumDataService.getAll()
      .then((response) => {
        console.log('Datos exportados correctamente', response.data);
        setForum(response.data.data);
      })
      .catch((error) => {
        console.error('Error al cargar las conversaciones:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Header subtitle={`Hola, ${user ? user.username : ""}`} />
      <Container>
        <Typography variant="h4" gutterBottom sx={{margin:"32px"}}>
          Tareas Pendientes
        </Typography>
        {tasks.length === 0 ? (
          <Typography variant="body1">
            No tienes tareas pendientes en este momento.
          </Typography>
        ) : (
          tasks.map((task) => (
            <Card key={task.id} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2">{task.description}</Typography>
              </CardContent>
            </Card>
          ))
        )}
        <Link href="/tasks" sx={{marginLeft:"16px"}}>Ver más <ArrowOutwardIcon sx={{marginLeft:"8px", color:"secondary"}} /></Link>
      </Container>
      <Container sx={{backgroundColor: theme.palette.primary.main, padding:"8px", marginTop:"32px", marginBottom:"32px"}}>
      <Typography variant="h4" gutterBottom sx={{margin:"32px", color:theme.palette.primary.contrastText}}>
          Tus mensajes 
        </Typography>
        {forum.length === 0 ? (
          <Typography variant="body1">
            No tienes mensajes.
          </Typography>
        ) : (
          forum.map((forum) => (
            <Card key={forum.id} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">{forum.title}</Typography>
                <Typography variant="body2">{forum.message}</Typography>
              </CardContent>
            </Card>
          ))
        )}
        <Link href="/forum" sx={{marginLeft:"16px", color:theme.palette.primary.contrastText}}>Ver más <ArrowOutwardIcon sx={{marginLeft:"8px", color:theme.palette.primary.contrastText}} /></Link>

      </Container>
      <Nav />
    </>
  );
}
