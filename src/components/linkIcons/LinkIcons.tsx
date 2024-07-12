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
      <a href="https://www.linkedin.com/in/francisco-montino-746b0b88/" className='link'>
        <LinkedInIcon fontSize="large" />
      </a>
      {/* <a href="https://github.com/franciscomontino" className='link'>
        <GitHubIcon fontSize="large" />
      </a> */}
    </Grid>
  );
}