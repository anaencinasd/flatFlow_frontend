import React from 'react';
import { Paper, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';


function GroupPaper({ imageUrl, title }) {
    const theme = useTheme();
  return (
    
    <Paper
      elevation={3}
      sx={{
        width: '150px',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '16px',
        backgroundColor: theme.palette.background.default, 
      }}
    >
      <img src={imageUrl} alt={title} width="80" height="80" />
      <Typography variant="subtitle1">{title}</Typography>
    </Paper>
    
  );
}

export default GroupPaper;
