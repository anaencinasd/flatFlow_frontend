import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import UserDataService from "./../../../Config/Service/user.service"

const GenericCard = ({
  dataService,
  id,
  titleField,
  descriptionField,
  statusField,
  link,
  userField,
  label,
  onDelete,
  onEdit,
}) => {
  const [cardData, setCardData] = useState(null);
  const [username, setUsername] = useState(""); 

  useEffect(() => {
    if (dataService && id) {
      dataService
        .get(id)
        .then((response) => {
          setCardData(response.data);
          
          getUserUsername(response.data[userField]);
        })
        .catch((error) => {
          console.error("Error al cargar datos:", error);
        });
    }
  }, [dataService, id, userField]);


  const getUserUsername = (userId) => {
    UserDataService.get(userId) 
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((error) => {
        console.error("Error al cargar el nombre de usuario:", error);
      });
  };

  if (!cardData) {
    return <div>Cargando...</div>;
  }

  const title = cardData[titleField];
  const description = cardData[descriptionField];
  const id_user = cardData[userField];
  const id_status = cardData[statusField]

  return (
    <Card sx={{ width: "100%", marginTop: "8px" }}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography component="div">{description}</Typography>
        <Chip label={`${label}: ${username}`} />
        

       
        
        
        
      </CardContent>
      <CardActions>
        <Link to={link}>
          <Button size="small">Ver más</Button>
        </Link>

        <Button size="small" onClick={onDelete}>
          Eliminar
        </Button>

        <Button size="small" onClick={onEdit}>
          Editar
        </Button>
      </CardActions>
    </Card>
  );
};


export default GenericCard;
