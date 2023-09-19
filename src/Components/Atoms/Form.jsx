import React, { useState } from 'react';
import { FormControl, InputLabel, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';

function GenericForm({ dataService, fields, onSuccess, text, button }) {
  const initialFormData = {};
  fields.forEach((field) => {
    initialFormData[field.name] = '';
  });

  const [formData, setFormData] = useState(initialFormData);
  const [passwordError, setPasswordError] = useState('');

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return; 
    }

    dataService.create(formData)
      .then((response) => {
        console.log('Registro exitoso:', response.data);
        setFormData(initialFormData);
        setPasswordError('');
        onSuccess(response.data);
      })
      .catch((error) => {
        console.error('Error al registrar:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <InputLabel htmlFor={field.name}></InputLabel>
          <TextField
            type={field.type || 'text'}
            className="form-control"
            size='small'
            sx={{ margin: '8px' }}
            label={field.label}
            id={field.name}
            required
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
          />
        </div>
      ))}

      {passwordError && (
        <Typography variant="body2" color="error">
          {passwordError}
        </Typography>
      )}
      
      <Button type="submit" variant="contained" sx={{ alignItems: 'center', marginTop:'32px', marginBottom:'32px' }}>
        {button}
      </Button>
      
      
    </form>
  );
}

export default GenericForm;
