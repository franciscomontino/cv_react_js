import { useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LabelBottomNavigation from './components/appBar/ButtonNavigation';
import IntroView from './components/introduction/IntroView';
import AboutView from './components/about/AboutView';
import SkillsView from './components/skills/Skills';
import ExperienceView from './components/experience/ExperienceView';
import "./globals.css";

function App() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="lg">
        <LabelBottomNavigation 
          key="nav"
          introRef={introRef}
          aboutRef={aboutRef}
          skillRef={skillRef}
          experienceRef={experienceRef}
          contactRef={contactRef}
          className="MuiBottomNavigation-root"
        />
        <IntroView key="intro" reference={introRef} />
        <AboutView key="about" reference={aboutRef} />
        <SkillsView key="skill" reference={skillRef} />
        <ExperienceView key="experience" reference={experienceRef} />
      </Container>
    </div>
  );
}

export default App;
