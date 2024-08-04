import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 
    navigate('/login'); 
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static" color="primary" sx={{ width: '100vw' }}>
        <Toolbar
          sx={{
            flexDirection: { xs: 'column', sm: 'row' }, 
            alignItems: { xs: 'center' }, 
            textAlign: { xs: 'center'}, 
          }}
        >
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontSize: { xs: '1.5rem', sm: '2rem' } }}
          >
            Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout} sx={{ mt: { xs: 2, sm: 0 } }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: 2, backgroundColor: '#f5f5f5' }}
      >
        <Typography variant="h4" color="textPrimary" sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
          Welcome to the Dashboard
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
