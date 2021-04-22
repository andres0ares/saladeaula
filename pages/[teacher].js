import Head from 'next/head'
import CardsTB from '../components/teacher/CardsTB'
import BookSection from '../components/teacher/BookSection'
import NavbarTB from '../components/teacher/NavBarTB'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {},
    topPd: {
        paddingTop: '40px'
    },
    header: {
        width: '100%',
        height: '500px',
        backgroundImage: 'url("/img/5144184.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '280px auto'
    }
}))

export default function teacher() {

    const classes = useStyles();

    return (
    <>
      <Head>
        <title>Professora Anne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarTB />
      <div className={classes.topPd}>
      </div>
      <header className={classes.header}></header>
      <CardsTB />
      <BookSection />
    </>
  )
}