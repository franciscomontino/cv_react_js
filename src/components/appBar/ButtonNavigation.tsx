import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import AppBar from './AppBar';
import { TitleXL } from './TitleXL';
import { TitleSM } from './TitleSM';

const title = "I'm Francisco :)";
const pages = ['Home', 'About', 'Skills', 'Experience', 'Contact'];

export default function LabelBottomNavigation({ ...refs }) {
  const handleTabChange = (newValue: number) => {
    scrollToSection(newValue);
    setAnchorElNav(null);
  };
  const refObject: any = {
    0: refs.introRef,
    1: refs.aboutRef,
    2: refs.skillRef,
    3: refs.experienceRef,
    4: refs.contactRef,
  }
  const scrollToSection = (section: number) => {
    if (section <= 4) {
      refObject[section].current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const BoxXL = () => (
    <Grid container mdOffset={2.5} >
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page, i) => (
          <Button
            key={page}
            onClick={() => handleTabChange(i)}
            sx={{ my: 2, display: 'block' }}
            className='GoldTittle'
          >
            {page}
          </Button>
        ))}
      </Box>
    </Grid>
  );

  const BoxSM = () => (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page, i) => (
          <MenuItem key={page} onClick={() => handleTabChange(i)} >
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );

  return (
    <AppBar >
      <TitleXL title={title} />
      <BoxSM />
      <TitleSM title={title} />
      <BoxXL />
    </AppBar >
  );
}