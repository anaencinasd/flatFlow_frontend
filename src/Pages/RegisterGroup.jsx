import { Button, Paper, useTheme, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Atoms/NavBAr';
import Header from '../Components/Atoms/Header';

const RegisterGroup = () => {
  const theme = useTheme();

  return (
    <>
    <Navbar />
    <Header
    title='Nos organizamos por grupos'
    subtitle='Pero si no te encargas de crearlo sigue adelante' />
    <Container
      sx={{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '64px'
        
      }}
    >
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
      <Link to="/dashboard">
          <Button variant="outlined" size="large">
            Ahora no quiero crear un grupo
          </Button>
        </Link>
    </Container>
    </>
  );
};

export default RegisterGroup;
