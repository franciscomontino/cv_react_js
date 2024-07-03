import Typography from '@mui/material/Typography';

export const TitleXL = ({ title }: { title: string }) => (

  <Typography
    variant="h4"
    noWrap
    component="a"
    href="/"
    sx={{
      mr: 2,
      display: { xs: 'none', md: 'flex' },
      fontWeight: 700,
      color: '#e2c15c',
      textDecoration: 'none',
    }}
  >
    {title}
  </Typography>
);