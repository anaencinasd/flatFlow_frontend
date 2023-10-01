
import React from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GenericForm from '../../Components/Atoms/Form';
import GroupDataService from '../../../Config/Service/group.service';
import Navbar from './../../Components/Atoms/NavBar';

function GroupForm() {
  const groupFields = [
    { label: 'Nombre del grupo', name: 'name' },
    { label: 'Imagen de perfil', name: 'picprofile', type: 'file' },
  ];

  const navigate = useNavigate();

  const handleGroupFormSuccess = (groupData) => {
    console.log('Grupo creado con éxito:', groupData);
    navigate('/dashboard');
  };

  return (
    <>
    <Navbar />
    <Container sx={{ marginTop: '32px', textAlign: 'center' }}>
      <GenericForm
        dataService={GroupDataService}
        fields={groupFields}
        button="CREAR GRUPO"
        onSuccess={handleGroupFormSuccess}
      />
    </Container>
    </>
  );
}

export default GroupForm;

