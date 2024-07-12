import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTextEffect } from '../../hooks/useTextEffect';
import { useBackgroundEffect } from '../../hooks/useBackgroundEffect';
import './Contact.css';

function ContactView({ ...props }) {
  const { reference } = props;

  const [isVisible, setVisible] = useState(false);

  const strings = [
    {
      string: 'Contact',
      htmlAttr: 'data-target-contact',
    },
  ];

  useTextEffect(reference, strings);

  useBackgroundEffect(reference, setVisible, true, 0.5);

  return (
    <div ref={reference} className={`Borderer-component contact-container borderer ${isVisible ? 'visible' : 'hide'}`}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container xs={12} md={12} lg={12}>
          <Grid xs={12} md={8} lg={8}>
            <Typography variant="h2" className='GoldTittle' data-target-contact ></Typography>
            <br /><br />
            <Typography variant="h5">
              Francisco Montino
            </Typography>
            <br />
            <Typography variant="h5">
              PH 021 08775797
            </Typography>
            <br />
            <Typography variant="h5">
              francisco.montino@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ContactView;