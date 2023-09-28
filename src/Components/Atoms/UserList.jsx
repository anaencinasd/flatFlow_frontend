import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useParams } from "react-router-dom";
import UserDataService from "./../../../Config/Service/user.service";
import UserListItem from "./UserListItem";
import PopUp from "./PopUp";

function UserList() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [openAddUserDialog, setOpenAddUserDialog] = useState(false);

  useEffect(() => {
    UserDataService.getUsersForGroup(id)
      .then((response) => {
        setUsers(response.data.usersForGroup);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error al obtener los miembros del grupo", error);
      });
  }, [id]);

  const handleOpenAddUserDialog = () => {
    setOpenAddUserDialog(true);
  };

  const handleRemoveUser = (groupId, userId) => {
    UserDataService.removeUserFromGroup(groupId, userId)
      .then((response) => {
        if (response.status === 200) {
          console.log("Usuario eliminado del grupo con éxito");
         
          const updatedUsers = users.filter((user) => user.id !== userId);
          setUsers(updatedUsers);
        } else {
          console.error("Error al eliminar el usuario del grupo");
        }
      })
      .catch((error) => {
        console.error("Error al eliminar el usuario del grupo", error);
      });
  };
  const handleUserAdded = (addedUser) => {
    
    setUsers([...users, addedUser]);
  };

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Typography variant="h6">Miembros del Grupo</Typography>
      <List>
        {users.map((user) => (
          <UserListItem
          key={user.id}
          user={user}
          groupId={id}
          onRemoveUser={() => handleRemoveUser(id, user.id)}
        />
        ))}
      </List>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<GroupAddIcon />}
          onClick={handleOpenAddUserDialog}
        >
          Añadir Usuario
        </Button>
      </div>
      <PopUp open={openAddUserDialog} onClose={() => setOpenAddUserDialog(false)} groupId={id} onUserAdded={handleUserAdded} />
    </Container>
  );
}

export default UserList;
