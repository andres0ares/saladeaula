import { makeStyles } from '@material-ui/core/styles'
import { useState }  from 'react' 
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Grow from '@material-ui/core/Grow'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import livros from '../../utils/books_obj'

const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '400px',
        backgroundColor: '#B7CED8',
        backgroundImage: 'url("/img/bg-book-1.png"), url("/img/bg-book-2.png"), url("/img/bg-book-3.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' bottom right, top right, bottom left',
        backgroundSize: '210px auto, 210px auto, 210px auto'
    },
    book: {
        margin: '30px 0 30px 50px',
        border: '10px solid white'
    },
    btn: {
        width: '100%',
        padding: '10px',
        color: 'white',
        backgroundColor: '#1D778B',
        marginTop: '10px'
    },
    card: {
        margin: '50px 0',
        backgroundColor: 'white'
    },
    margin: {
        paddingTop: '150px',
        paddingBottom: '150px'
    }
}))

export default function BookSection() {

    const classes = useStyle()

    const [ step1, setStep1 ] = useState(true)
    const [ step2, setStep2 ] = useState(false)
    const [ step3, setStep3 ] = useState(false)
    const [ selectedBook, setSelectedBook ] = useState({})

    const handleStep1 = () => {
        setStep1(false)
        setStep2(true)
    }

    const handleStep2 = (livro) => {
        setSelectedBook(livro)
        setStep2(false)
        setStep3(true)
    
    }

    const handleStep3 = () => {
        setStep2(true)
        setStep3(false)
    }

    const handleOpenBook = (url) => {
        window.open(url)
    }

    return (
        <>
            <div className={classes.root}>

                {step1 && (
                    <Grow
                    in={step1}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(step1 ? { timeout: 1000 } : {})}
                    >
                        <Grid container className={classes.margin}>
                            <Grid item xs></Grid>
                            <Grid item xs={4} md={3}>
                                <Button
                                className={classes.btn}
                                onClick={handleStep1}
                                > Acessar Livros </Button>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>  
                    </Grow>    
                )}
                
                {step2 && (
                <Grow
                in={step2}
                style={{ transformOrigin: '0 0 0' }}
                {...(step2 ? { timeout: 1000 } : {})}
                > 
                    <div className={classes.margin}>
                    {livros.map((livro, index) => (
                        <Grid container key={index}>
                            <Grid item xs></Grid>
                            <Grid item xs={4} md={3} >
                                <Button
                                className={classes.btn}
                                onClick={() => handleStep2(livro)}
                                > {livro.title} </Button>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                    ))}
                    </div> 
                </Grow> 
                )}

                { step3 && ( 
                    <Grow
                    in={step3}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(step3 ? { timeout: 1000 } : {})}
                    > 
                    <div >
                    <Grid container> 
                        <Grid item xs> </Grid>
                        <Grid item xs={10} md={3}> 
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt={selectedBook.title}
                                    height="430"
                                    image={selectedBook.img}
                                    title={selectedBook.title}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {selectedBook.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {selectedBook.subtitle}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => handleOpenBook(selectedBook.drive)}>
                                    ACESSAR
                                    </Button>
                                    <Button size="small" color="primary" onClick={handleStep3}>
                                    Escolher outro Livro
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs> </Grid>
                    </Grid>
                </div>
                </Grow> ) }
            
            </div>
            
        </>
    )
} 