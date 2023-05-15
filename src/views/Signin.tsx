import { Facebook, Google, Twitter, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, IconButton, InputAdornment, Link, TextField, Typography, useTheme } from '@mui/material'
import { useState } from 'react';

const Signin = () => {

  const theme = useTheme();

  const [showPassword, setshowPassword] = useState<boolean>(false);
  const [keepMeLogged, setkeepMeLogged] = useState<boolean>(false);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: theme.palette.primary[500]
      }}>
      <Box sx={{
        width: '100%',
        px: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100vh',
        maxWidth: 700
      }}>
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          maxWidth: 500
        }}>
          <Typography variant='h1'>Sign In</Typography>
          <Typography variant='body1' color='gray'>Do you have an account? <Link>Login</Link></Typography>
          <Box sx={{
            my: theme.spacing(3),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}>
            <Button variant='outlined' sx={{
              borderColor: 'gray',
              minHeight: 4,
              width: 125,
              color: theme.palette.red[500],
              "&:hover": {
                borderColor: theme.palette.red[500],
              }
            }}><Google /></Button>
            <Button variant='outlined' sx={{
              borderColor: 'gray',
              minHeight: 4,
              width: 125,
              color: theme.palette.blue[500],
              "&:hover": {
                borderColor: theme.palette.blue[500],
              }
            }}><Facebook /></Button>
            <Button variant='outlined' sx={{
              borderColor: 'gray',
              minHeight: 4,
              width: 125,
              color: 'skyblue',
              "&:hover": {
                borderColor: 'skyblue'
              }
            }}><Twitter /></Button>
          </Box>
          <Divider><Typography variant='body2'>Or</Typography></Divider>
          <Box component='form' sx={{
            my: theme.spacing(2),
            flexShrink: 2,
          }}>
            <TextField
              fullWidth
              sx={{ my: theme.spacing(1) }}
              type='email'
              label="Email address" />
            <TextField
              fullWidth
              sx={{ my: theme.spacing(1) }}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => setshowPassword(!showPassword)}
                      onMouseDown={(event) => event.preventDefault()}
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }} />
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
              <FormGroup sx={{ m: theme.spacing(0.5, 1) }}>
                <FormControlLabel control={
                  <Checkbox
                    checked={keepMeLogged}
                    color='primary'
                    onChange={(event) => setkeepMeLogged(event.target.checked)} />} label="Keep me logged" />
              </FormGroup>
              <Typography variant='body2'><Link>Forgot Password?</Link></Typography>
            </Box>

            <Button variant='contained' fullWidth sx={{ my: theme.spacing(2) }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Signin