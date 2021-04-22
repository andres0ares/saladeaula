import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import NavBar from '../../components/index/AppBar'
import styles from '../../styles/Editor.module.css'
import { useState } from 'react'

import AulasForm from '../../components/editor/AulasForm'

export default function editor() {

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

    const handleNewAula = (newAula) => {
        console.log(newAula)
        handleEdAulas()
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
            { edAulas && (<AulasForm send={handleNewAula} />)}
        </>
    )
}