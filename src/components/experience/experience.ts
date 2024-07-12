export const EmploymentDetail: EmploymentDetailI = {
  Happ: {
    company: 'happ',
    description: "Lead the backend development of an application aimed at controlling and monitoring the health status of our client's workers.",
    stack: 'NodeJS, NestJS, MongoDB, TypeScript, AWS using Route 53, Elastic Beanstalk, Amplify, CodeCommit.',
    url: 'happlabs.cl',
  },
  Notarisa: {
    company: 'Notarisa',
    description: "Saas that digitizes notarial processes through the implementation of AES and online payment systems.",
    stack: 'ReactJS, TypeScript, NodeJs, Prisma ORM, Knex SQL Query builder, GraphQL, RabbitMQ, MongoDB, PostgreSQL, Docker - Docker Compose.',
    url: 'www.notarisa.cl',
  },
  Tramitta: {
    company: 'Tramitta - Legal Chile',
    description: "System focused on generating property rental contracts electronically.",
    stack: 'ReactJS, TypeScript, NodeJs, Prisma ORM, Knex SQL Query builder, PostgreSQL, MongoDB.',
    url: 'www.legalchile.cl/contrato-de-arriendo-online',
  },
  InMotion: {
    company: 'In Motion',
    description: "External resource as a developer for car insurance module implementation project.",
    stack: 'C#, .NET, PostgreSQL.',
    url: 'grupoinmotion.com',
  },
  ICar: {
    company: 'ICar',
    description: "Backend developer in a system dedicated to collecting information from different sources to generate reports about the status of a car before being sold (outstanding debts, fines, robbery charges, highway debts, etc.).",
    stack: 'Python, Flask, Selenium, PostgreSQL',
    url: 'i-car.cl',
  },
  TwoWin: {
    company: '2Win Consulting',
    description: "Developing solutions in ERP Oracle Netsuite, implementing microservices and integrations with client services.",
    stack: 'Oracle Netsuite, SuiteScript 2.0, Oracle Database',
    url: '2win.cl',
  },
};

export interface EmploymentDetailI {
  [x: string]: {
    company: string,
    description: string,
    stack: string,
    url: string,
  }
}