import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import photo from '../../assets/profile.jpeg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkNavigation from '../linkIcons/LinkIcons';
import "./introView.css";
import { useTextEffect } from '../../hooks/useTextEffect';

function IntroView({ ...props }) {
  const { reference, contactRef } = props;

  const strings = [
    {
      string: 'Hey there!',
      htmlAttr: 'data-target-intro',
    },
    {
      string: "I'm",
      htmlAttr: 'data-target-intro',
    },
    {
      string: 'Francisco Montino',
      htmlAttr: 'data-target-intro-2',
    },
    {
      string: 'Full-Stack developer',
      htmlAttr: 'data-target-intro-3',
    },
  ];

  useTextEffect(reference, strings);

  const scrollToSection = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={reference} className='Intro Borderer-component'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container xs={12} md={12} lg={12} spacing={1} alignItems='center' justifyContent='center'>
          <Grid xs={12} md={8} lg={8}>
            <Box>
              <Typography display="inline" variant="h3" className='T1' data-target-intro ></Typography>
              <Typography display="inline" variant="h2" gutterBottom className='GoldTittle' data-target-intro-2 ></Typography>
              <br />
              <Typography variant="h3" gutterBottom data-target-intro-3 ></Typography>
              <br /><br />
              <Button variant="outlined" className='GButton' size="large"
                onClick={() => {
                  scrollToSection()
                }}>Contact me</Button>
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