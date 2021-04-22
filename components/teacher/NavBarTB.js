import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ClassIcon from '@material-ui/icons/Class';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Link from 'next/link'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    backgroundColor: '#1D778B',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  icon: {
    color: '#423561'
  }
}));



export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const turmas = [
    {
        title: '6º ANO',
        link: '/turma/anne_6ano'
    },
    {
        title: '7º ANO A e B',
        link: '/turma/anne_7ano'
    },
    {
        title: '8º ANO',
        link: '/turma/anne_8ano'
    },
    {
        title: '9º ANO',
        link: '/turma/anne_9ano'
    }
  ]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Professora Anne - Ciências
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper, 
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>

            <Link href='/anne' >
              <ListItem button key={'home'}>
                <ListItemIcon> <HomeIcon className={classes.icon} /> </ListItemIcon>
                <ListItemText primary={'Início'} />
              </ListItem>
            </Link>

            {turmas.map((turma, index) => (
              <Link href={turma.link} key={index}>
                <ListItem button >
                  <ListItemIcon> <ClassIcon className={classes.icon} /> </ListItemIcon>
                  <ListItemText primary={turma.title} />
                </ListItem>
              </Link>
            ))}          

            <ListItem button key={'tasks'}>
              <ListItemIcon> <AssignmentTurnedInIcon /> </ListItemIcon>
              <ListItemText primary={'Atividades'} />
            </ListItem>
            <ListItem button key={'news'}>
              <ListItemIcon> <AnnouncementIcon /> </ListItemIcon>
              <ListItemText primary={'Avisos'} />
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
}