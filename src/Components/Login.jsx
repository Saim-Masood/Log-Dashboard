import React from 'react';
import AuthForm from './Authh';
import { Grid} from '@mui/material';


const Login = () => {
    return (
      <Grid container component="main" style={{ height: '100vh'  }}>
        <Grid item xs={12}  >
          <AuthForm isLogin={true} />
        </Grid>
      </Grid>
    );
  };
  
  export default Login;
  
