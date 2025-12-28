import React from 'react'
import { Container } from '@mui/material';
import Layout1 from '../components/Header1/Layout1';
import Footer from '../components/Footer/Footer';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Link} from 'react-router-dom';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LoginImg from '../assets/images/sign-login-account.jpg';

const Signup = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
            phoneNumber: data.get("phoneNumber"),
        });
      };
      
return (
    <Layout1>
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${LoginImg})`,
              backgroundRepeat: "no-repeat",
            //   backgroundColor: (t) =>
            //     t.palette.mode === "light"
            //       ? t.palette.grey[50]
            //       : t.palette.grey[900],
            //   backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square 
            style={{
                boxShadow: '2px 2px 4px 1px #d3d0d0', 
                border: '1px solid #ddd', 
                borderRadius: '5px'
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="Name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  autoFocus
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundImage:'linear-gradient(to right, #f3723b, #e54750)' }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to={'/Login'} style={{cursor: 'pointer'}}>
                      {"Already have an account? Login"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    <Footer />  
    </Layout1>
  )
}

export default Signup
