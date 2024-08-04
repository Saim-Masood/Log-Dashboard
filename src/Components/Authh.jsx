import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Divider, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ isLogin, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('users')) || [];

    if (isLogin) {
      const userExists = storedData.find(user => user.email === email && user.password === password);
      if (userExists) {
        onLogin(); 
        navigate('/dashboard'); 
      } else {
        alert('Invalid credentials');
      }
    } else {
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      navigate('/login');
    }
  };
  
  return (
    <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
      <StyledCard>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            {isLogin ? 'Log In' : 'Sign Up'}
          </Typography>
          <Divider variant="middle" sx={{ marginBottom: 2 }} />
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  />
              </>
            )}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              >
              {isLogin ? 'Log In' : 'Sign Up'}
            </Button>
            <Box textAlign="center" marginTop={2}>
              {isLogin ? (
                <Button onClick={() => navigate('/signup')}>
                  Don't have an account? Sign Up
                </Button>
              ) : (
                <Button onClick={() => navigate('/login')}>
                  Already have an account? Log In
                </Button>
              )}
            </Box>
          </form>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default AuthForm;
