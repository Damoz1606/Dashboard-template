import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react';
import { NavLink as NavLinkBase, NavLinkProps } from 'react-router-dom';

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => (
  <NavLinkBase
    ref={ref}
    {...props}
  />
))

const NotFound = () => {

  const theme = useTheme();

  return (
    <Box
      sx={{
        px: 7,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box sx={{
        maxWidth: 500,
        px: 3,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography sx={{ my: theme.spacing(2) }} textAlign='center' variant="h3" fontWeight={700} color={theme.palette.primary[400]}>Sorry, page not found!</Typography>
        <Typography sx={{ mb: theme.spacing(2) }} textAlign='center' variant='caption'>Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL? Be sure to check your spelling</Typography>
        <Typography sx={{ my: theme.spacing(2) }} textAlign='center' variant="h1" fontWeight={700} color={theme.palette.red[400]}>400</Typography>
        <Button
          sx={{
            my: 10,
            px: 5,
            py: 1
          }}
          variant='contained'
          component={NavLink}
          to="/rotten/home">Go to Home</Button>
      </Box>
    </Box>
  )
}

export default NotFound