import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import NavBar from '../../components/index/AppBar'
import styles from '../../styles/Editor.module.css'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import turmas from '../../utils/anne_obj'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List'

import AulasForm from '../../components/editor/AulasForm'
import CardAula from '../../components/turma/CardAula'
const useStyles = makeStyles((theme) => ({
    root: {},
    formItem: {
        width: '90%',
        margin: '5px 5% 5px 5%'
    }
}))

export default function editor() {

    const classes = useStyles()

    const [ edTurmas, setEdTurmas ] = useState(false)
    const [ edAulas, setEdAulas ] = useState(false)

    const handleEdTurmas = () => {
        if(edTurmas){
            setEdTurmas(false)
        } else {
            setEdTurmas(true)
            setEdAulas(false)
        }
    }
    const handleEdAulas = () => {
        if(edAulas){
            setEdAulas(false)
        } else {
            setEdAulas(true)
            setEdTurmas(false)
        }
    }

    const handleNewAula = async (newAula) => {
        console.log(newAula)
        // handleEdAulas()

        const res = await fetch(
            'http://localhost/3000/api/aulas',
            {
              body: JSON.stringify(newAula),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }
          )
      
          const result = await res.json()
          // result.user => 'Ada Lovelace'

    }

    const [dados, setDados ] = useState([{}])
    const [turma, setTurma ] = useState('')

    const handleTurma = (event) => {
        const newTurma = event.target.value
        console.log(event.target)
        const newDados = turmas.find(({ key }) => key === newTurma)
        setDados(newDados)
        setTurma(newTurma)
    }

    
    

    return (
        <>
            <NavBar />
            <ButtonGroup className={styles.painel} variant="contained" color="primary" aria-label="contained primary button group">
                <Button onClick={handleEdTurmas}>Editar Turma</Button>
                <Button onClick={handleEdAulas}>Editar Aulas </Button>
                <Button>***</Button>
            </ButtonGroup>
            { edTurmas && (<p>Hello World</p>)}
            { edAulas && (<>
                <div>
                    <FormControl className={classes.formItem} >
                    <InputLabel id="turma-select-label">Selecione Turma</InputLabel>
                    <Select
                    
                    labelId="turma-select-label"
                    id="turma-select"
                    value={turma}
                    onChange={handleTurma}
                    >
                        {turmas.map((option, index) => (
                            <MenuItem key={index} value={option.key}>{option.title}</MenuItem>
                        ))}
    
                    </Select>
                    </FormControl>
                    
                </div> 
            </>)}
            { turma !== '' && (
                <>
                    <AulasForm send={handleNewAula} />
                    <div className={classes.formItem} >
                        <List dense={true} className={classes.root}>
                            {dados.aulas.map((aula, index) => (
                                <CardAula key={index} aula={aula} />
                            ))}
                        </List>
                    </div>
                    
                </>
            )}
        </>
    )
}

// 