import TextField from '@material-ui/core/TextField';
import { useState } from 'react'
import Button from '@material-ui/core/Button'

export default function AulasForm(props) {

    var options = { year: 'numeric', month: 'long', day: 'numeric' }
    const newDate = new Date().toLocaleDateString('pt-BR', options)

    const [newAula, setNewAula] = useState({
        title: '',
        drive: '',
        file: '',
        date: newDate
    })


    const handleNewAula = (event) => {
        const { value, name }  = event.target
        if(name === 'drive' && value.length > 63){

            const id = value.slice(32, 65)
            const file = `https://drive.google.com/uc?export=download&id=` + id
            
            setNewAula((preValue) => ({
                ...preValue,
                [name]: value,
                ['file']: file
            }))
        } else {
            setNewAula((preValue) => ({
                ...preValue,
                [name]: value
            }))
        }
    }

    return (
        <>
            <form>
                <TextField onChange={handleNewAula} id="outlined-basic" label="Título da Aula" name="title" value={newAula.title} ariant="outlined" />
                <TextField onChange={handleNewAula} id="outlined-basic" label="Link do arquivo no Drive" name="drive" value={newAula.drive} ariant="outlined" />
                <Button onClick={() => props.send(newAula)}>Enviar</Button>
            </form>
        </>
    )
}