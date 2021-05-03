import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useUser } from '@auth0/nextjs-auth0';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bgColor: {
    backgroundColor: '#424242'
  },
}));

export default function ButtonAppBar() {

  const { user, error, isLoading } = useUser();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bgColor}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Sala de Aula
          </Typography>
          {user && <>
              <Link href={'/api/auth/logout'}><Button color="inherit">Sair</Button></Link>
              <Link href={'/editor'}><Button color="inherit">Editor</Button></Link>
            </>
          }    
          {!user && !isLoading && 
            <Link href={'/api/auth/login'}><Button color="inherit">Entrar</Button></Link>
          }      
        </Toolbar>
      </AppBar>
    </div>
  );
}

