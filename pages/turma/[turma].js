import { useRouter } from 'next/router'
import NavbarTB from '../../components/teacher/NavBarTB'
import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import CardAula from '../../components/turma/CardAula'

import base_URL from '../../utils/variables'
import Head from 'next/head'


const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: '100px'
  }
}))

export default function Turma({ dados }) {

  const classes = useStyle()
  const router = useRouter()

  const { turma } = router.query
  const aulas = dados[0].aulas

  return (
     <>
      <Head>
        <title>Professora Anne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarTB />
      
      {aulas.length > 0 && 
        (<List dense={true} className={classes.root}>
          {aulas.map((aula, index) => (
            <CardAula key={index} aula={aula} />
          ))}
         </List>)
      }
      {(dados === null || dados === undefined) && (
        <p className={classes.root} >A pagina para a turma ({turma}) não foi encontrada.</p>
      )}    
      
    </>
  )
}

Turma.getInitialProps = async (ctx) => {

  const { query } = ctx
  const { turma } = query

    const response = await fetch(base_URL + `/api/turma/${turma}`)
    const turmass = await response.json()
    return { dados: turmass.data }
}