import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const GenericCard = ({ dataService, id, titleField, descriptionField, link, userField }) => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    if (dataService && id) {
      dataService.get(id)
        .then((response) => {
          setCardData(response.data);
        })
        .catch((error) => {
          console.error('Error al cargar datos:', error);
        });
    }
  }, [dataService, id]);

  if (!cardData) {
    return <div>Cargando...</div>;
  }

  const title = cardData[titleField];
  const description = cardData[descriptionField];
  const id_user = cardData[userField];

  return (
    <Card sx={{width:'100%', marginTop:'8px'}}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography  component="div">
          {description}
        </Typography>
        <Typography>{id_user}</Typography>
      </CardContent>
      <CardActions>
        <Link to={link}>
        <Button size="small">Ver más</Button>
        </Link>
      </CardActions>
    </Card>
    
  );
};

export default GenericCard;
