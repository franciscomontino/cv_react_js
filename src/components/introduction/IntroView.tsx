import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import photo from '../../assets/profile.jpeg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkNavigation from '../linkIcons/LinkIcons';
import "./introView.css";

function IntroView({ ...props }) {
  const { reference } = props;
  return (
    <div ref={reference} className='Intro Borderer-component'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container xs={12} md={12} lg={12} spacing={1} alignItems='center' justifyContent='center'>
          <Grid xs={12} md={8} lg={8}>
            <Box>
              <Typography display="inline" variant="h3" className='T1'>
                I'm
              </Typography>
              <Typography display="inline" variant="h2" gutterBottom className='GoldTittle'>
                Francisco Montino
              </Typography>
              <br />
              <Typography variant="h3" gutterBottom>
                Software developer Full-Stack
              </Typography>
              <br /><br />
              <Button variant="outlined" className='GButton' size="large">Contact me</Button>
              <LinkNavigation />
            </Box>
          </Grid>
          <Grid xs={8} md={4} lg={4}>
            <div className='Bordered-image'>
              <img src={photo} alt='imageChef' className='Bordered-image' />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default IntroView;