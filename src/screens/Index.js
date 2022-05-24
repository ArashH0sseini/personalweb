import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import profileImageLtr from '../assets/images/profile2.jpg'
import profileImageRtl from '../assets/images/profile.jpg'
import { Button } from '@mui/material'
import { changeLanguage, getTranslate, lang } from '../localization/index'
import HomeScreen from './HomeScreen'
import AboutScreen from './AboutScreen'
import ResumeScreen from './ResumeScreen'
import PortfolioScreen from './PortfolioScreen'
import ContactScreen from './ContactScreen'
import './index.css'


const drawerWidth = 260;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(0)
  const translate = getTranslate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar className='bg-siderbarBg'>
        <div className='w-full p-5 border-b-[1px] border-solid border-borderColor text-center'>
          {
            lang === "fa" ?
              <img src={profileImageRtl} className="rounded-full w-52 h-52 max-w-full border-8 border-solid border-borderColor" alt={translate.name} />
              :
              <img src={profileImageLtr} className="rounded-full w-52 h-52 max-w-full border-8 border-solid border-borderColor" alt={translate.name} />

          }
        </div>
      </Toolbar>
      <List className='flex flex-col flex-1 bg-siderbarBg justify-center items-center'>
        <ListItem className={page === 0 ? null : 'listItem'} style={{ backgroundColor: page === 0 ? '#037fff' : 'transparent', color: '#fff', paddingLeft: 0,paddingRight:0 }}
          onClick={() => { setPage(0); setMobileOpen(false) }} button>
          <ListItemText
            children={<Typography className='listItemText' style={{ color: page === 0 ? '#fff' : "#a4acc4" }} variant='body2'>{translate.home}</Typography>} />
          <div className='overlay' />
        </ListItem>
        <ListItem className={page === 1 ? null : 'listItem'} style={{ backgroundColor: page === 1 ? '#037fff' : 'transparent', color: '#fff', paddingLeft: 0,paddingRight:0 }}
          onClick={() => { setPage(1); setMobileOpen(false) }} button>
          <ListItemText
            children={<Typography className='listItemText' style={{ color: page === 1 ? '#fff' : "#a4acc4" }} variant='body2'>{translate.about}</Typography>} />
          <div className='overlay' />
        </ListItem>
        <ListItem className={page === 2 ? null : 'listItem'} style={{ backgroundColor: page === 2 ? '#037fff' : 'transparent', color: '#fff', paddingLeft: 0,paddingRight:0 }}
          onClick={() => { setPage(2); setMobileOpen(false) }} button>
          <ListItemText
            children={<Typography className='listItemText' style={{ color: page === 2 ? '#fff' : "#a4acc4" }} variant='body2'>{translate.resume}</Typography>} />
          <div className='overlay' />
        </ListItem>
        <ListItem className={page === 3 ? null : 'listItem'} style={{ backgroundColor: page === 3 ? '#037fff' : 'transparent', color: '#fff', paddingLeft: 0,paddingRight:0 }}
          onClick={() => { setPage(3); setMobileOpen(false) }} button>
          <ListItemText
            children={<Typography className='listItemText' style={{ color: page === 3 ? '#fff' : "#a4acc4" }} variant='body2'>{translate.portfolios}</Typography>} />
          <div className='overlay' />
        </ListItem>
        <ListItem className={page === 4 ? null : 'listItem'} style={{ backgroundColor: page === 4 ? '#037fff' : 'transparent', color: '#fff', paddingLeft: 0,paddingRight:0 }}
          onClick={() => { setPage(4); setMobileOpen(false) }} button>
          <ListItemText
            children={<Typography className='listItemText' style={{ color: page === 4 ? '#fff' : "#a4acc4" }} variant='body2'>{translate.contact}</Typography>} />
          <div className='overlay' />
        </ListItem>
      </List>
      <div className='p-4 border-t-[1px] border-solid border-borderColor bg-siderbarBg text-center'>
        <Button color={lang === 'fa' ? 'primary' : 'secondary'} className='font-vazir' onClick={() => changeLanguage('fa')}>فارسی</Button>
        {'/'}
        <Button color={lang === 'en' ? 'primary' : 'secondary'} onClick={() => changeLanguage('en')}>english</Button>
      </div>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const getPage = () => {
    switch (page) {
      case 0:
        return <HomeScreen />
      case 1:
        return <AboutScreen />
      case 2:
        return <ResumeScreen />
      case 3:
        return <PortfolioScreen />
      case 4:
        return <ContactScreen />
      default: <HomeScreen />
        break;
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <IconButton
        className='z-10 m-1 w-12 h-12 bg-[#191d2b] border-[1px] border-solid border-[#2e344e] rounded-none top-5 fixed'
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ ml: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor={localStorage.getItem('lang') === "fa" ? "right" : 'left'}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#2e344e' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          anchor={localStorage.getItem('lang') === "fa" ? "right" : 'left'}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#2e344e' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        className='text-center relative'
        component="main"
        sx={{ flexGrow: 1, pr: 3, pl:3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <span className='-z-10 w-[1px] min-h-full bg-[rgba(46,52,87,0.3)] absolute left-[20%]'></span>
        <span className='-z-10 w-[1px] min-h-full bg-[rgba(46,52,87,0.3)] absolute left-[40%]'></span>
        <span className='-z-10 w-[1px] min-h-full bg-[rgba(46,52,87,0.3)] absolute left-[60%]'></span>
        <span className='-z-10 w-[1px] min-h-full bg-[rgba(46,52,87,0.3)] absolute left-[80%]'></span>
        {getPage()}
      </Box>
    </Box>
  );
}


export default ResponsiveDrawer;
