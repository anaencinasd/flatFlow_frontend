import React, { useEffect } from 'react'
import Nav from '../../Components/BottomNavigation';
import Navbar from '../../Components/Atoms/NavBAr';
import Header from '../../Components/Atoms/Header';
import GroupPaper from '../../Components/Atoms/GroupPapers';
import { Container, Typography, Paper, useTheme, Button } from '@mui/material';
import { useState } from 'react';
import UserDataService from './../../../Config/Service/user.service'
import { Link } from 'react-router-dom';

export default function IndexGroup() {  

const theme = useTheme();

const [userGroups, setUserGroups] = useState([]);

useEffect(() =>{
    UserDataService.getGroupsForUser()
 .then((response) => {
    setUserGroups(response.data.groups)
    console.log(response.data)

})
.catch((error) =>{
    console.error("Error al obtener los grupos para el usuario", error);
});
},[]);

 
 


  return (
    <>
    <Navbar />
    <Header
    subtitle='Tus grupos' />
    <Container sx={{textAlign:'center', justifyContent:'center', alignContent: 'center'}}>
    {userGroups && userGroups.length === 0 ? (
  <Typography variant="subtitle1">El usuario no está en ningún grupo.</Typography>
) : (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }}>
    {userGroups.map((group, index) => (
      <Link key={index} to={`/groupdetail/${group.id}`}> 
      <GroupPaper key={index} imageUrl={group.picprofile} title={group.name} />
      </Link>
    ))}
      
  </div>
)}
<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }}>

<Paper
        elevation={3}
        sx={{
          width: '150px',
          height: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin:'16px',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Link to='/newgroup'>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<span>+</span>}
          style={{ border: 'none' }}
        >
          Crear Nuevo Grupo
        </Button>
        </Link>
        
      </Paper>
      </div>

      
    </Container>
    <Nav />
    
    </>
  )
}
