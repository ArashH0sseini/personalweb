import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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
import { changeLanguage,getTranslate } from '../localization/index'

const drawerWidth = 260;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const translate = getTranslate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar className='bg-siderbarBg'>
        <div className='w-full p-5 border-b-[1px] border-solid border-borderColor text-center'>
          {
            localStorage.getItem('lang')==="fa" ?  
            <img src={profileImageRtl} className="rounded-full w-52 h-52 max-w-full border-8 border-solid border-borderColor" alt={translate.name} />
            :
            <img src={profileImageLtr} className="rounded-full w-52 h-52 max-w-full border-8 border-solid border-borderColor" alt={translate.name} />

          }
        </div>
      </Toolbar>
      <List className='flex flex-col flex-1 bg-siderbarBg justify-center items-center'>
          <ListItem button>
              <ListItemText
              children={<Typography variant='body2'>{translate.home}</Typography>} />
          </ListItem>
          <ListItem button>
              <ListItemText
              children={<Typography variant='body2'>{translate.about}</Typography>} />
          </ListItem>
          <ListItem button>
              <ListItemText
              children={<Typography variant='body2'>{translate.resume}</Typography>} />
          </ListItem>
          <ListItem button>
              <ListItemText
              children={<Typography variant='body2'>{translate.portfolios}</Typography>} />
          </ListItem>
          <ListItem button>
              <ListItemText
              children={<Typography variant='body2'>{translate.contact}</Typography>} />
          </ListItem>
      </List>
      <div className='p-4 border-t-[1px] border-solid border-borderColor bg-siderbarBg text-center'>
        <Button className='font-vazir text-white' onClick={()=>changeLanguage('fa')}>فارسی</Button>
        {'/'}
        <Button className='text-white' onClick={()=>changeLanguage('en')}>english</Button>
      </div>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      className='bg-[#10121b]'
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
          anchor={localStorage.getItem('lang')==="fa" ? "right" : 'left'}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}


export default ResponsiveDrawer;
