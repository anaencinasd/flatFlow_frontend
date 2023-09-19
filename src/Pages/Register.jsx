import './../css/register.css'
import GenericForm from '../Components/Atoms/Form';
import UserDataService from './../../Config/Service/user.service'
import { Container, Typography} from '@mui/material';
import Header from '../Components/Atoms/Header';
import { Link, useNavigate } from 'react-router-dom';




function UserForm() {
  const userFields = [
    { label: 'Nombre de usuario', name: 'username' },
    { label: 'E-mail', name: 'email', type: 'email' },
    { label: 'Contraseña', name: 'password', type: 'password' },
    { label: 'Confirmar Contraseña', name: 'confirmPassword', type: 'password' },
    {name:'picprofile', type:'file'}
    
    
  ];

  const navigate = useNavigate()


  const handleUserFormSuccess = (userData) => {
    console.log('Usuario registrado con éxito:', userData);
    console.log(userData.token)
    localStorage.setItem("token",userData.token);
    
    
    // const userToken = userData.token;

    
    navigate('/registergroup')
    

    
   
  };





  



  return (
    <>
    <Header 
      title='Ahora vamos a crearte una cuenta' 
      subtitle='¡Hola! para que asegurarte una buena experiencia en FlatFlow necesitaremos un poco de información'
      />

<Container sx={{marginTop:'32px', textAlign:'center'}}>
      
    
      <GenericForm dataService={UserDataService} fields={userFields} button="SIGUIENTE" onSuccess={handleUserFormSuccess} />
      <Typography>
        ¿Ya tienes una cuenta? <Link to="/login">Login</Link>
      </Typography>
  </Container> 
    </>
    
    
    

  
        
    
    
  );
}

export default UserForm;
