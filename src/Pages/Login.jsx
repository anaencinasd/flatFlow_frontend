// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Header from '../Components/Atoms/Header';
// import AuthService from './../../Config/Service/auth.service'
// import storage from '../Storage/storage';


// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Llama al servicio de autenticación para realizar el inicio de sesión
//       const response = await AuthService.login(formData);

//       if (response.ok) {
//         // El inicio de sesión fue exitoso, redirige al usuario al dashboard
//         navigate('/dashboard');
//       } else {
//         // El inicio de sesión falló, puedes mostrar un mensaje de error
//       }
//     } catch (error) {
//       console.error('Error de inicio de sesión:', error);
//       // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
//     }
//   };

//   return (
//     <>
//       <Header
//         title="Loguéate"
//         subtitle="Genial que estés de vuelta, te hemos echado de menos"
//       />
//       <Container>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 label="Email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 variant="outlined"
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Contraseña"
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 variant="outlined"
//                 fullWidth
//                 required
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             size="large"
//           >
//             Iniciar sesión
//           </Button>
//         </form>
//       </Container>
//     </>
//   );
// }

// export default Login;
import React, { useState } from "react";
import AuthService from "./../../Config/Service/auth.service";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  // const handleLogin = () => {
  //   axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
  //     axios.post('http://127.0.0.1:8000/api/login', { email, password }).then(response => {
  //       console.log('User signed in!');
  //     }).catch(error => console.log(error)); 
  //   });
  // }

  const handleLogin = async () => {
    try {
      const response = await AuthService.login({ email, password });
      const token = response.access_token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
      console.error("Error al iniciar sesión:", error);
    }
  };
  

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
