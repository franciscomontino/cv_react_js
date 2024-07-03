import * as React from 'react';
import { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import js_icon from '../../assets/js_icon.png';
import ts_icon from '../../assets/ts_icon.png';
import nest_icon from '../../assets/nestjs_icon.png';
import react_icon from '../../assets/react_icon.jpg';
import postgresql_icon from '../../assets/postgresql_icon.png';
import mongo_icon from '../../assets/mongodb_icon.png';
import aws_icon from '../../assets/aws_icon.png';
import c_icon from '../../assets/c_sharp_icon.png';
import flask_icon from '../../assets/flask_icon.png';
import graphql_icon from '../../assets/graphql_icon.png';
import net_icon from '../../assets/net_icon.png';
import node_icon from '../../assets/node_icon.png';
import python_icon from '../../assets/python_icon.png';
import rabbit_icon from '../../assets/rabbitmq_icon.png';
import netsuite_icon from '../../assets/netsuite_icon.png';
import next_icon from '../../assets/nextjs_icon.png';
import './skills.css';


interface DataListI {
  icon: any;
  name: string;
}

const dataList: DataListI[] = [
  {
    icon: js_icon,
    name: "JavaScript",
  },
  {
    icon: ts_icon,
    name: "TypeScript",
  },
  {
    icon: node_icon,
    name: "NodeJS",
  },
  {
    icon: nest_icon,
    name: "NestJS",
  },
  {
    icon: react_icon,
    name: "ReactJS",
  },
  {
    icon: next_icon,
    name: "NextJS",
  },
  {
    icon: postgresql_icon,
    name: "PSQL",
  },
  {
    icon: mongo_icon,
    name: "MongoDB",
  },
  {
    icon: c_icon,
    name: "C#",
  },
  {
    icon: net_icon,
    name: ".NET 7.0",
  },
  {
    icon: python_icon,
    name: "Python",
  },
  {
    icon: flask_icon,
    name: "Flask",
  },
  {
    icon: graphql_icon,
    name: "GraphQL",
  },
  {
    icon: rabbit_icon,
    name: "Rabbit MQ",
  },
  {
    icon: aws_icon,
    name: "AWS",
  },
  {
    icon: netsuite_icon,
    name: "Oracle Netsuite",
  },
];

const CardComponent = (dataList: DataListI[]) => {
  return (dataList.map((element: DataListI) => (
    <Grid item xs={6} md={3} lg={2}>
      <Card variant="outlined">
        <CardContent className='container'>
          <img src={element.icon} className='Skill_icon' />
          <br />
          <Typography variant="h6" textAlign="center">
            {element.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )))
};

export default function SkillsView({ ...props }) {
  const { reference } = props;
  return (
    <div ref={reference} className='Borderer-component'>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h2" className='GoldTittle'>
          Skills
        </Typography>
        <br /><br />
        <Grid container spacing={4} >
          {CardComponent(dataList)}
        </Grid>
      </Box>
    </div>
  );
}