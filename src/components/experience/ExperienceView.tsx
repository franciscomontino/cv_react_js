import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const cv_developer = [
  {
    year: "2023",
    companyName: "Happ",
    jobTitle: "Backend developer",
    description: "Backend developer, responsible for the development and deployment of the Apps on AWS."
  },
  {
    year: "2020 - 2022",
    companyName: "Jumpitt Labs",
    jobTitle: "Full-Stack developer",
    description: "Software engineer, front end and back end development in various products."
  },
  {
    year: "2019 - 2020",
    companyName: "2WIN Consulting",
    jobTitle: "SuiteScript Developer",
    description: "Oracle Netsuite developer using Suitescript 2.0."
  },
];

const cv_old = [
  {
    year: "2018",
    companyName: "Entel",
    jobTitle: "Sub-management of networks",
    description: "Logistic and spare part warehouse management at sub-management of networks Entel Valparaíso."
  },
  {
    year: "2014 - 2018",
    companyName: "Ezentis",
    jobTitle: "Senior Technician",
    description: "Radio base maintenance technician."
  },
  {
    year: "2013 - 2014",
    companyName: "Inercom",
    jobTitle: "Technician",
    description: "Maintenance of DC plants, installation of electrical and backup systems, maintenance and installation of telecommunications equipment in Movistar antennas. Installation and maintenance of Electrical Distribution Board."
  },
];

const TimeLine = (list: any) => {
  return (list.map((data: any) => (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.primary"
      >
        <Typography variant="h5" className='GoldTittle'>{data.year}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h4" component="span" className='GoldTittle'>
          {data.companyName}
        </Typography>
        <Typography variant="h5">{data.jobTitle}</Typography>
        <Typography variant="h6">{data.description}</Typography>
      </TimelineContent>
    </TimelineItem>
  )));
}

function ExperienceView({ ...props }) {
  const { reference } = props;
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div ref={reference} className='Borderer-component'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} className='TimeLineContainer'>
          <Grid item xs={12}>
            <Typography variant="h2" className='GoldTittle'>
              Experience
            </Typography>
            <br />
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Show another experiences"
            />
            <Slide className='slide test' direction="right" in={checked} mountOnEnter unmountOnExit timeout={{ appear: 1000, enter: 2000, exit: 1000 }}>
              <Timeline>
                {TimeLine(cv_old)}
              </Timeline>
            </Slide>
            <Slide className='slide' direction="left" in={!checked} mountOnEnter unmountOnExit timeout={{ appear: 1000, enter: 2000, exit: 1000 }}>
              <Timeline>
                {TimeLine(cv_developer)}
              </Timeline>
            </Slide>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ExperienceView;