import { useRouter } from 'next/router'
import NavbarTB from '../../components/teacher/NavBarTB'
import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import CardAula from '../../components/turma/CardAula'

import turmas from '../../utils/anne_obj'
import Head from 'next/head'


const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: '100px'
  }
}))

export default function Turma() {

  const classes = useStyle()
  const router = useRouter()

  const { turma } = router.query
  const dados = turmas.find(({ key }) => key === turma);

  return (
     <>
      <Head>
        <title>Professora Anne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarTB />
      
      {dados && 
        (<List dense={true} className={classes.root}>
          {dados.aulas.map((aula, index) => (
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