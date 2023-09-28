
import React, { useState } from "react";
import {
  AvatarGroup,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import UserDataService from "./../../../Config/Service/user.service";

function PopUp({ open, onClose, groupId, onUserAdded }){
  const [searchUsername, setSearchUsername] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchResultMessage, setSearchResultMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]); 

  const handleSearchUser = () => {
    console.log('Realizando búsqueda de usuario:', searchUsername);

    UserDataService.findByUsername(searchUsername)
      .then((response) => {
        const foundUser = response.data.data;

        if (foundUser) {
          // setSearchResultMessage(`Usuario encontrado: ${foundUser.username}`);
          
          setSearchResults([foundUser]);
        } else {
          setSearchResultMessage("Usuario no encontrado");
         
          setSearchResults([]);
        }

       
        setSelectedUser(foundUser);
      })
      .catch((error) => {
        console.error("Error al buscar usuario", error);
        setSearchResultMessage("El usuario no existe");
        setSelectedUser(null); 
        
        setSearchResults([]);
      });
  };

  const handleAddUserToGroup = () => {
    console.log('groupId:', groupId);
    if (selectedUser) {
      UserDataService.addUserToGroup(groupId, selectedUser.id)
        .then((response) => {
          if (response.status === 201) {
            console.log("Usuario agregado al grupo con éxito");
          
            onUserAdded(selectedUser);
          } else {
            console.error("Error al agregar el usuario al grupo");
            
          }
        })
        .catch((error) => {
          console.error("Error al agregar el usuario al grupo", error);
        })
        .finally(() => {
          setSelectedUser(null);
          setSearchResultMessage("");
          onClose();
        });
    }
  };
  

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Buscar Usuario</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Ingresa el nombre de usuario del usuario que deseas agregar al grupo.
        </DialogContentText>
        <TextField
          label="Nombre de Usuario"
          variant="outlined"
          fullWidth
          value={searchUsername}
          onChange={(e) => setSearchUsername(e.target.value)}
        />
        <Typography
          variant="body2"
          color={selectedUser ? "textPrimary" : "error"}
        >
          {searchResultMessage}
        </Typography>

       
        <ul style={{ listStyleType: "none", padding: 0 }}>
  {searchResults.map((user) => (
    <li key={user.id} style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {user.picprofile ? (
          <img
            src={user.picprofile}
            alt={user.username}
            style={{
              width: "48px",
              height: "48px",
              marginRight: "16px",
              borderRadius: "50%",
            }}
          />
        ) : (
          <div
            style={{
              width: "48px",
              height: "48px",
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ccc", 
              borderRadius: "50%",
            }}
          >
            <AvatarGroup /> 
          </div>
        )}
        <div>
          <Typography variant="subtitle1">{user.username}</Typography>
          <Typography variant="body2">{user.email}</Typography>
        </div>
      </div>
    </li>
  ))}
</ul>

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSearchUser} color="primary">
          Buscar
        </Button>
        <Button
          onClick={handleAddUserToGroup}
          color="primary"
          disabled={!selectedUser}
        >
          Añadir
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PopUp;
