
import React, { useState } from 'react';
import { FormControl, InputLabel, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';

function GenericForm({ dataService, fields, onSuccess, text, button }) {
  const initialFormData = {};
  fields.forEach((field) => {
    initialFormData[field.name] = field.type === 'file' ? null : '';
  });

  const [formData, setFormData] = useState(initialFormData);
  const [passwordError, setPasswordError] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'flatflow');
    setLoading(true);

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dvx0lmqap/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      const file = await res.json();
      console.log(file);
      setImage(file.secure_url);
      setLoading(false);
    } catch (error) {
      console.error('Error al subir la imagen a Cloudinary:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    
    if (type === 'file') {
      uploadImage(event); 
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return;
    }
  
    const formDataToSend = new FormData();
  
    for (const key in formData) {
      
      if (formData[key] instanceof File) {
        formDataToSend.append(key, formData[key]);
      } else if (key === 'picprofile' && image) {
        
        formDataToSend.append(key, image);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }
  
    dataService.create(formDataToSend)
      .then((response) => {
        console.log('Registro exitoso:', response.data);
        setFormData(initialFormData);
        setPasswordError('');
        setImage(''); 
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
          {field.type === 'file' ? (
            <div>
             
              <input
                accept="image/*"
                id={field.name}
                name={field.name}
                type="file"
                onChange={handleInputChange}
                style={{ display: 'none' }}
              />
              <label htmlFor={field.name}>
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                >
                  Subir archivo
                </Button>
              </label>
              {loading && <Typography variant="body2">Cargando...</Typography>}
              {image && (
                <Typography variant="body2">
                  Imagen cargada: <a href={image} target="_blank" rel="noopener noreferrer">Ver imagen</a>
                </Typography>
              )}
            </div>
          ) : (
            <TextField
              type={field.type || 'text'}
              className="form-control"
              size="small"
              sx={{ margin: '8px' }}
              label={field.label}
              id={field.name}
              required
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
            />
          )}
        </div>
      ))}

      {passwordError && (
        <Typography variant="body2" color="error">
          {passwordError}
        </Typography>
      )}

      <Button
        type="submit"
        variant="contained"
        sx={{ alignItems: 'center', marginTop: '32px', marginBottom: '32px' }}
      >
        {button}
      </Button>
    </form>
  );
}

export default GenericForm;

