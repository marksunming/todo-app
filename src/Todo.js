import { Button, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Modal } from '@material-ui/core'
import React, { useState } from 'react';
import './Todo.css';
import db from './firebase';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo({ todo, id }) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [input, setInput] = useState('');

    const updateTodo = () => {

        db.collection('todos').doc(id).set({
            todo: input
        }, { merge: true })
        setOpen(false);
    }

    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <input 
                    placeholder={todo.todo}
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                />
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>

        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={todo.todo} secondary='dummy deadline'></ListItemText>
            </ListItem>
            <button onClick={e => setOpen(true)} >Edit</button>
            <DeleteForeverOutlinedIcon onClick={event => db.collection('todos').doc(id).delete()} />
        </List>
        </>
    )
}

export default Todo
