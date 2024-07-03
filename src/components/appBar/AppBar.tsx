import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import './appBar.css';

export default function LabelBottomNavigation({ children }: React.PropsWithChildren) {
  return (
    <AppBar position="fixed" className="Background">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
