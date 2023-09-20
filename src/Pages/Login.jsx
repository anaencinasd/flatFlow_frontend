
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, FormControlLabel, Checkbox, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthService from './../../Config/Service/auth.service';
import Header from '../Components/Atoms/Header';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await AuthService.login({ email, password });
      const token = response.access_token;
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (error) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <>
      <Header
        title="Loguéate"
        subtitle="Genial que estés de vuelta, te hemos echado de menos"
      />
      <Container>
        <Grid container justifyContent="center" alignItems="center" sx={{marginTop:"48px"}} >
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Iniciar Sesión
              </Typography>
              <form>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Contraseña"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                 <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuérdame"
            />
                <Button
                  type="button" 
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  style={{ marginTop: '10px' }}
                  onClick={handleLogin}
                >
                  Iniciar sesión
                </Button>
              </form>
              {error && (
                <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>
                  {error}
                </Typography>
              )}
              <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Has olvidado la contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"¿No tienes cuenta? Regístrate"}
                </Link>
              </Grid>
            </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Login;

