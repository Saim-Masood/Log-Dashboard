import React from 'react';
import { Grid } from '@mui/material';
import AuthForm from './Authh';

const Signup = () => {
  return (
    <Grid container component="main" style={{ height: '100vh' }}>
      <Grid item xs={12} >
        <AuthForm isLogin={false} />
      </Grid>
    </Grid>
  );
};

export default Signup;
