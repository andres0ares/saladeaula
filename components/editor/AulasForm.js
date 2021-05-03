import 'date-fns'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import DateFnsUtils from '@date-io/date-fns'
import { 
  MuiPickersUtilsProvider,
  KeyboardDatePicker, 
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {},
    formItem: {
        width: '90%',
        margin: '5px 5% 5px 5%'
    }
}))


export default function AulasForm(props) {

    const classes = useStyles()

    const [ checked, setChecked ] = useState(true) 
    const [ valid, setValid ] = useState(false) 
    
    const newDate = new Date()

    const opt = {
        title: '',
        drive: '',
        file: '',
        date: newDate
    }

    const [newAula, setNewAula] = useState(opt)

    const handleDateChange = (date) => {
        const params = {target: {name: 'date', value: date}}
        handleNewAula(params)
    };


    const handleNewAula = (event) => {
        const { value, name }  = event.target
        
        if(name === 'drive' && value.length > 65) {

            const id = value.slice(32, 65)
            const file = `https://drive.google.com/uc?export=download&id=` + id
            
            setNewAula((preValue) => ({
                ...preValue,
                [name]: value,
                ['file']: file
            }))

            setValid(true)

        } else {
            setNewAula((preValue) => ({
                ...preValue,
                [name]: value
            }))

            if (newAula.drive.length < 65) setValid(false)

        }
        
        
    }
    
    const prepareAndSend = () => {
        const test = newAula
        console.log(test)
        console.log(newAula)
        if(checked) {
            setNewAula((preValue) => ({
                ...preValue,
                ['date']: newDate
            }))
        }      
        
        if(valid) {
            props.send(newAula)   
            setNewAula(opt)
        }
             
    }

    return (
        <>
            <form>
                {!valid && (<p className={classes.formItem}>Insira um link do drive válido</p>)}
                <TextField className={classes.formItem} onChange={handleNewAula} id="outlined-basic" label="Título da Aula" name="title" value={newAula.title} ariant="outlined" />
                <TextField className={classes.formItem} onChange={handleNewAula} id="outlined-basic" label="Link do arquivo no Drive" name="drive" value={newAula.drive} ariant="outlined" />
                <FormControlLabel
                     className={classes.formItem}
                    control={
                    <Switch
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Data Atual"
                />
                {!checked && (
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <KeyboardDatePicker
                            className={classes.formItem}
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog" 
                            format="MM/dd/yyyy"
                            value={newAula.date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                )}
                <Button className={classes.formItem} onClick={prepareAndSend}>Enviar</Button>
            </form>
        </>
    )
}