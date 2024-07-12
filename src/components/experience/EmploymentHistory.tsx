import { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTextEffect } from '../../hooks/useTextEffect';
import happ_img from '../../assets/web_background/Happ.jpg';
import notarisa_img from '../../assets/web_background/notarisa.png';
import tramitta_img from '../../assets/web_background/legalchile.png';
import inMotion_img from '../../assets/web_background/inmotion.png';
import icar_img from '../../assets/web_background/icar.png';
import twowin_img from '../../assets/web_background/2win.jpg';
import { useBackgroundEffect } from '../../hooks/useBackgroundEffect';
import EmploymentFragment from './EmploymentFragment';
import './employmentHistory.css';

function ExperienceView({ ...props }) {
  const { reference } = props;
  const happRef = useRef(null);
  const notarisaRef = useRef(null);
  const tramittaRef = useRef(null);
  const inMotionRef = useRef(null);
  const icarRef = useRef(null);
  const twoWinRef = useRef(null);

  const [isVisible, setVisible] = useState(false);

  const strings = [
    {
      string: 'My projects',
      htmlAttr: 'data-target-employment',
    }
  ];

  useTextEffect(reference, strings);

  useBackgroundEffect(reference, setVisible);

  useEffect(()=> {
    return () => {
      setVisible(true);
    }
  }, [isVisible])

  return (
    <div ref={reference} className='Borderer-component'>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h2" className='GoldTittle' data-target-employment></Typography>
        <div className='content'>
          { isVisible && <div className='overlay visible'></div>}
          <EmploymentFragment id="Happ" reference={happRef} img={happ_img}/>
          <EmploymentFragment id="Notarisa" reference={notarisaRef} img={notarisa_img} />
          <EmploymentFragment id="Tramitta" reference={tramittaRef} img={tramitta_img} />
          <EmploymentFragment id="InMotion" reference={inMotionRef} img={inMotion_img} />
          <EmploymentFragment id="ICar" reference={icarRef} img={icar_img} />
          <EmploymentFragment id="TwoWin" reference={twoWinRef} img={twowin_img} />
        </div>
      </Box>
    </div>
  );
}

export default ExperienceView;