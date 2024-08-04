import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Divider, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 450,
  margin: 'auto',
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
  borderRadius: '10px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
}));

const AuthForm = ({ isLogin, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState(''); // New field
  const [phoneNumber, setPhoneNumber] = useState(''); // New field
  const navigate = useNavigate();

  // Clear form fields when switching between login and signup
  useEffect(() => {
    setEmail('');
    setPassword('');
    setFullName(''); // Reset new field
    setPhoneNumber(''); // Reset new field
  }, [isLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('users')) || [];

    if (isLogin) {
      const userExists = storedData.find(user => user.email === email && user.password === password);
      if (userExists) {
        onLogin(); // Set login status
        navigate('/dashboard'); // Redirect to dashboard on successful login
      } else {
        alert('Invalid credentials');
      }
    } else {
      // localStorage.setItem('users', JSON.stringify([...storedData, { email, password, fullName, phoneNumber }]));
      // navigate('/login'); // Redirect to login page after successful signup
      const newUser = { email, password, fullName, phoneNumber };
      const updatedUsers = [...storedData, newUser];
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
