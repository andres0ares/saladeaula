import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader';
import LaunchIcon from '@material-ui/icons/Launch';
import Link from 'next/link'
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '40px 0 40px 0'
    },
    card: {
        margin: '10px 40px 10px 40px'
    },
    btn: {
        backgroundColor: '#423561',
        color: 'white',
        padding: '10px',
        margin: '5px 5px 0 0'
    },
    cardcontentM: {
        paddingTop: '0'
    },
    p: {
        margin: '0'
    }

}))

const turmas = [
    {
        title: '6º ANO',
        subheader: 'EMEF José Ribeiro de Morais',
        link: '/turma/anne_6ano'
    },
    {
        title: '7º ANO A e B',
        subheader: 'EMEF José Ribeiro de Morais',
        link: '/turma/anne_7ano'
    },
    {
        title: '8º ANO',
        subheader: 'EMEF José Ribeiro de Morais',
        link: '/turma/anne_8ano'
    },
    {
        title: '9º ANO',
        subheader: 'EMEF José Ribeiro de Morais',
        link: '/turma/anne_9ano'
    }
]

export default function CardsTB() {

    const classes = useStyles();

    return (
            <>
                <Grid container className={classes.root}>
                    {turmas.map((turma, index) => (
                        <Grid item xs={12} md={4} key={index} >
                            <Card className={classes.card}>
                                <CardHeader
                                    action={
                                    <Link href={turma.link}>
                                        <Fab
                                        size="small" 
                                        color="secondary" 
                                        aria-label="Abrir Aula" 
                                        variant="extended"
                                        className={classes.btn}
                                        >
                                            <LaunchIcon />
                                            Abrir
                                        </Fab>
                                    </Link>
                                    }
                                    title={turma.title}
                                    
                                />
                                <CardContent className={classes.cardcontentM}>
                                    <p className={classes.p} >{turma.subheader}</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </>
    );
}