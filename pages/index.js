import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AppBar from '../components/index/AppBar';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Button from '@material-ui/core/Button';


export default function Home() {

  const tools = [
    { name: 'React', img: '/react.svg' },
    { name: 'Next.js', img: '/nextjs.svg' },
    { name: 'Mongodb', img: '/mongodb.svg'},
    { name: 'JavaScript', img: '/js.svg'}, 
  ]

  return (
    <>
    <AppBar />

    <div className={styles.container}>
      <Head>
        <title>Sala de Aula - OAndre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.title}>
          <Grid container>
            <Grid item xs ></Grid>
            <Grid item xs={12} md={6}>
              <h1>Fácil</h1>
              <h1>Simples</h1>
              <h1>Eficiente.</h1>
              <p>Desenvolvido por André Soares</p>
            </Grid>
            <Grid item xs={false} md={4} >
              <h1>-\(-_-)/-</h1> 
            </Grid>
            <Grid item xs ></Grid>
          </Grid>
      </header>

      <section className={styles.exemple}>
        <Grid container>
          <Grid item xs ></Grid>
          <Grid item xs={12} md={6} > 
            <div className={styles.paper1}>
              <h1>(*.*)</h1>
            </div>
          </Grid>
          <Grid item xs={12} md={4}  >
            <div className={styles.paper2} >
              <h1>Veja um exemplo</h1>
              <Link href={'/anne'}><Button variant="contained">Professora Anne</Button></Link>
            </div>
          </Grid>
          <Grid item xs ></Grid>
        </Grid>
      </section>

      <section className={styles.tools}>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={1}> <h1 className={styles.left}>{'{'}</h1> </Grid>
          <Grid item xs={8}> 
            <Grid container > 
                {tools.map((icon, index) => (
                  <Grid item xs={3} key={index}>
                    <img className={styles.logo} src={icon.img} alt={icon.name}></img></Grid>
                ))}
            </Grid>
          </Grid>
          <Grid item xs={1}> <h1 className={styles.right} >{'}'}</h1> </Grid>
          <Grid item xs={1} /> 
        </Grid>
      </section>

      <footer className={styles.footer}>
      
      </footer>
    </div>
    </>
  )
}
