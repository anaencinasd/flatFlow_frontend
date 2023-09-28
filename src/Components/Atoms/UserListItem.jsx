// import React from "react";
// import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// function UserListItem({ user, onRemoveUser }) {
//   const handleRemoveUser = () => {
   
//     onRemoveUser();
//   };

//   return (
//     <ListItem>
//       <ListItemAvatar>
//         <Avatar alt={user.username} src={user.picprofile} />
//       </ListItemAvatar>
//       <ListItemText primary={user.username} />
//       <IconButton
//         edge="end"
//         aria-label="Eliminar usuario"
//         onClick={handleRemoveUser}
//       >
//         <DeleteIcon />
//       </IconButton>
//     </ListItem>
//   );
// }

// export default UserListItem;

import React, { useState } from "react";
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UserDataService from "../../../Config/Service/user.service";

function UserListItem({ user, groupId, onRemoveUser }) {
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const handleRemoveUserClick = () => {
    setConfirmDialogOpen(true);
  };

  const handleConfirmRemoveUser = () => {
    // Cierra el cuadro de diálogo de confirmación
    setConfirmDialogOpen(false);
    // Llama a la función para eliminar al usuario del grupo
    onRemoveUser();
  };

  const handleCancelRemoveUser = () => {
    // Cierra el cuadro de diálogo de confirmación
    setConfirmDialogOpen(false);
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={user.username} src={user.picprofile} />
      </ListItemAvatar>
      <ListItemText primary={user.username} />
      <IconButton
        edge="end"
        aria-label="Eliminar usuario"
        onClick={handleRemoveUserClick}
      >
        <DeleteIcon />
      </IconButton>
      
      <Dialog open={confirmDialogOpen} onClose={handleCancelRemoveUser}>
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent>
          ¿Estás seguro de que deseas eliminar a {user.username} del grupo?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelRemoveUser} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmRemoveUser} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </ListItem>
  );
}

export default UserListItem;


