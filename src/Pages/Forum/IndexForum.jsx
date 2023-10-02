import React, { useState, useEffect } from 'react';
import ForumDataService from './../../../Config/Service/forum.service'; 
import GenericCard from './../../Components/Atoms/Card'; 
import { Container, Button } from '@mui/material';
import Header from '../../Components/Atoms/Header';
import Nav from '../../Components/BottomNavigation';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Navbar from './../../Components/Atoms/NavBAr';

function IndexForum() {
  const [forum, setforum] = useState([]);

  useEffect(() => {
    ForumDataService.getAll()
      .then((response) => {
        console.log('Datos exportados correctamente', response.data);
        setforum(response.data.data);
      })
      .catch((error) => {
        console.error('Error al cargar las conversaciones:', error);
      });
  }, []);
  

  return (
    <>
    <Navbar />
    <Header 
    title='Tablón'/>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {forum.map((forum) => (
        <GenericCard
          key={forum.id}
          dataService={ForumDataService}
          id={forum.id}
          label="De"
          titleField="title"
          descriptionField="message"
          userField="id_user"
          link={`/forumdetail/${forum.id}`}
        />
        
        
      ))}
      <Link to="/newthread">
      <Button variant="contained" color="primary">
        <AddIcon />
        Añadir Nueva conversación
      </Button>
    </Link>
      </Container>
      <Nav />
    </>
  );
}

export default IndexForum;
