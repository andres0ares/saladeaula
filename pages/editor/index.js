import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import NavBar from '../../components/index/AppBar'
import styles from '../../styles/Editor.module.css'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List'

import base_URL from '../../utils/variables'
import AulasForm from '../../components/editor/AulasForm'
import CardAula from '../../components/turma/CardAula'

const useStyles = makeStyles((theme) => ({
    root: {},
    formItem: {
        width: '90%',
        margin: '5px 5% 5px 5%'
    }
}))  

export default function Editor({turmas}) {


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
        
        const url = `/api/aulas/${turma}`

        const res = await fetch(
            url,
            {
              body: JSON.stringify(newAula),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }
        )
            
        const result = await res.json()
        if(result.success) {
            setDados(result.data)
        }
            
    }

    const handleDelete = async (id) => {

        const url = `/api/aulas/${turma}`

        const res = await fetch(
            url,
            {
              body: JSON.stringify({_id: id}),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'DELETE'
            }
        )
            
        const result = await res.json()
        if(result.success)
            setDados(result.data)

    }

    const [dados, setDados ] = useState([{}])
    const [turma, setTurma ] = useState('')

    const handleTurma = (event) => {
        const newTurma = event.target.value
        const newDados = turmas.find(({ key }) => key === newTurma)
        setDados(newDados.aulas)
        setTurma(newTurma)
    }

    
    

    return (
        <>
            <NavBar />
            <div className={classes.formItem}>
                <ButtonGroup className={styles.painel} variant="contained" color="primary" aria-label="contained primary button group">
                    <Button onClick={handleEdTurmas}>Editar Turma</Button>
                    <Button onClick={handleEdAulas}>Editar Aulas </Button>
                    <Button>***</Button>
                </ButtonGroup>
            </div>
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
            { turma !== '' && dados && (
                <>
                    <AulasForm send={handleNewAula} />
                    <div className={classes.formItem} >
                        <List dense={true} className={classes.root}>
                            {dados.map((aula, index) => (
                                <CardAula key={index} aula={aula} del={true} delFunction={handleDelete}/>
                            ))}
                        </List>
                    </div>
                    
                </>
            )}
        </>
    )
}

Editor.getInitialProps = async () => {
    const response = await fetch(base_URL + '/api/turmas')
    const turmass = await response.json()
    return { turmas: turmass.data }
}

// 