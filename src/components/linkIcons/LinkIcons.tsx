import * as React from 'react';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './linkIcon.css';

export default function LinkNavigation() {
  return (
    < Grid
      container
      className='LinkIcons'
    >
      <LinkedInIcon fontSize="large" />
      <GitHubIcon fontSize="large" />
    </Grid>
  );
}