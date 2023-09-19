
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PlaylistAddCheckSharpIcon from '@mui/icons-material/PlaylistAddCheckSharp';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import AccountBalanceWalletSharpIcon from '@mui/icons-material/AccountBalanceWalletSharp';
import { Link } from 'react-router-dom';



export default function Nav() {
  const [value, setValue] = React.useState('dashboard');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <BottomNavigation sx={{ width: '100%', position: 'fixed', bottom: 0 }} value={value} onChange={handleChange}>
      
        <BottomNavigationAction 
        component={Link}
        to="/dashboard"
          
          label="Home"
          value="dashboard"
          icon={<HomeSharpIcon  />}
        />
      
      
        <BottomNavigationAction
         component={Link}
        to="/tasks"
       
          label="Tareas"
          value="tasks"
          icon={<PlaylistAddCheckSharpIcon />}
        />
      
      
        <BottomNavigationAction
        component={Link}
        to="/forum"
          label="Foro"
          value="forum"
          icon={<ForumSharpIcon />}
        />
      
      
        <BottomNavigationAction
        component={Link}
        to="/balance"

          label="Gastos"
          value="balance"
          icon={<AccountBalanceWalletSharpIcon />}
        />
      
    </BottomNavigation>
  );
}
