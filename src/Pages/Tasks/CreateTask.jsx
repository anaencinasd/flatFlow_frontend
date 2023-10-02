import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Typography,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TaskDataService from "../../../Config/Service/task.service";
import GroupDataService from "../../../Config/Service/group.service";
import UserDataService from "../../../Config/Service/user.service";
import CategoryDataService from "../../../Config/Service/category.service";
import Header from "../../Components/Atoms/Header";
import NavBar from "./../../Components/Atoms/NavBar";
import Nav from "../../Components/BottomNavigation";

function TaskForm() {
  const navigate = useNavigate();

  const [userGroups, setUserGroups] = useState([]);
  const [groupMembers, setGroupMembers] = useState([]);
  const [taskFields, setTaskFields] = useState({
    title: "",
    description: "",
    id_user: null, 
    id_group: null,
    id_category: null,
    id_status: "1",
  });
  const [categories, setCategories] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); 
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    UserDataService.getGroupsForUser()
      .then((response) => {
        setUserGroups(response.data.groups);
      })
      .catch((error) => {
        console.error("Error al obtener los grupos para el usuario", error);
      });

    CategoryDataService.getAll()
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });
  }, []);

  const handleGroupChange = (event, newValue) => {
    setTaskFields({ ...taskFields, id_group: newValue });
    if (newValue) {
      UserDataService.getUsersForGroup(newValue.id)
        .then((response) => {
          setGroupMembers(response.data.usersForGroup);
        })
        .catch((error) => {
          console.error("Error al obtener los miembros del grupo:", error);
        });
    } else {
      setGroupMembers([]);
    }
  };

  const handleUserChange = (event, newValue) => {
    setSelectedUser(newValue); 
    setTaskFields({ ...taskFields, id_user: newValue ? newValue.id : null });
  };

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue); 
    setTaskFields({ ...taskFields, id_category: newValue ? newValue.id : null });
  };

  const handleUserFormSuccess = (taskData) => {
    console.log("Tarea registrada con éxito:", taskData);
  };

  return (
    <>
      <NavBar />
      <Header subtitle="Agregar tarea" />
      <Container sx={{ marginTop: "32px", textAlign: "center" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            
            TaskDataService.create(taskFields)
              .then((response) => {
                console.log("Tarea registrada con éxito:", response.data);
                navigate("/tasks"); 
              })
              .catch((error) => {
                console.error("Error al registrar la tarea:", error);
              });
          }}
        >
          <TextField
            required
            id="title"
            label="Tarea"
            value={taskFields.title}
            onChange={(e) => setTaskFields({ ...taskFields, title: e.target.value })}
            sx={{ width: '100%' }}
          />
          <TextField
            required
            id="description"
            label="Detalla un poco más"
            multiline
            maxRows={4}
            value={taskFields.description}
            onChange={(e) => setTaskFields({ ...taskFields, description: e.target.value })}
            sx={{ marginTop: '1rem', width: '100%'}}
          />

          <Autocomplete
            id="group-autocomplete"
            options={userGroups}
            getOptionLabel={(option) => option.name}
            value={groupMembers.find((group) => group.id === taskFields.id_group)}
            onChange={handleGroupChange}
            renderInput={(params) => (
              <TextField {...params} label="¿A qué grupo pertenece?" required sx={{ marginTop: '1rem' }} />
            )}
          />

          <Autocomplete
            id="user-autocomplete"
            options={groupMembers}
            getOptionLabel={(option) => option.username}
            value={selectedUser} 
            onChange={handleUserChange}
            renderInput={(params) => (
              <TextField {...params} label="¿A quién se la asignas?" required sx={{ marginTop: '1rem' }} />
            )}
          />

<Autocomplete
            id="category-autocomplete"
            options={categories}
            getOptionLabel={(option) => option.type}
            value={selectedCategory} 
            onChange={handleCategoryChange}
            renderInput={(params) => (
              <TextField {...params} label="Selecciona una categoría" required sx={{ marginTop: '1rem' }} />
            )}
          />

          <input type="hidden" name="id_status" value={taskFields.id_status} />

          <Button
            type="submit"
            variant="contained"
            sx={{
              alignItems: "center",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          >
            Asignar tarea
          </Button>
        </form>

        <Typography>
          Volver al <Link to="/tasks">listado de tareas</Link>
        </Typography>
      </Container>
      <Nav />
    </>
  );
}

export default TaskForm;
