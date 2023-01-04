import { Menu } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <Box>
      <AppBar position="sticky" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">
          
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
    
  )
}

export default Navbar