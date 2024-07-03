import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './about.css';

function AboutView({ ...props }) {
  const { reference } = props;
  return (
    <div ref={reference} className='Borderer-component'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container xs={12} md={12} lg={12} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h2" className='GoldTittle'>
              About
            </Typography>
            <br /><br />
            <Typography variant="h5" className=''>
              I am a Chilean software engineer with 5 years of experience in Front End and Back End development in different projects
              focused on many different areas, such as health, managment and automation of notarial processes.
            </Typography>
            <br />
            <Typography variant="h5" className=''>
              I am motivated to learn new technology and improve my job skills every day, initiatives that I believe
              will be valuable to you.
              Throughout my career, I have improved my technical analysis and programming skills. Focused on
              developing under SOLID principles, Clean Code and design patterns, I try to guarantee the quality of
              my work.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AboutView;