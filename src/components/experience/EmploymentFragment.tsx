import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import { useBackgroundEffect } from '../../hooks/useBackgroundEffect';
import { EmploymentDetail } from './experience';
import './employmentHistory.css';

interface propI {
  id: string,
  reference: React.MutableRefObject<null>,
  img: string
}

const textComponent = (detail: any) => (
  <Box className='text-box'>
    <Grid container xs={12} md={12} lg={12} className="text-background Borderer-component">
      <Grid xs={12} md={12} lg={12} spacing={4}>
        {/* <Typography variant="h2" className='text-color'>
          {detail.company}
        </Typography> */}
        <p className='text-color large-text bold'>{detail.company}</p>
        <br />
        <Typography variant="h5" className='GoldTittle'>
          {detail.description}
        </Typography>
        <br />
        <p className='GoldTittle'>Technological stack used: {detail.stack}</p>
        <br />
        <a className='link bold mid-text' href={`https://${detail.url}`}>{detail.url}</a>
      </Grid>
    </Grid>
  </Box>
);

export default function EmploymentFragment({ ...props }: propI) {
  const { id, reference, img } = props;

  const [isVisible, setVisible] = useState(false);

  useBackgroundEffect(reference, setVisible);

  return (
    <div id={id} ref={reference} className='Borderer-component'>
      <Grid container xs={12} md={12} lg={12} className='employment-container'>
        <img src={img} className={`background-effect ${isVisible ? 'visible' : 'hide'}`} />
        <Grow
          in={isVisible}
          {...(isVisible ? { timeout: 500 } : {})}
        >
          {textComponent(EmploymentDetail[id])}
        </Grow>
      </Grid>
    </div>
  );
}