import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import ClassIcon from '@material-ui/icons/Class';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link'


export default function CardAula(props) {

    const aula = props.aula

    const handleClick = () => {
        window.open(aula.drive)
    }

    return (
        <>     
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <ClassIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                primary={aula.title}
                secondary={aula.date}
                />
                
                <ListItemSecondaryAction>
                    <Link href={aula.file}>
                        <IconButton edge="end" aria-label="Link">
                            <GetAppIcon />
                        </IconButton>
                    </Link>
                    <IconButton edge="end" aria-label="Link" onClick={handleClick}>
                        <LinkIcon  />
                    </IconButton>
                    {(props.del) && (<>
                        <IconButton edge="end" aria-label="Link" onClick={() => props.delFunction(aula._id)}>
                            <DeleteIcon  />
                        </IconButton>
                    </>)}
                </ListItemSecondaryAction>
                
                
            </ListItem>
             
        </>
    )
}