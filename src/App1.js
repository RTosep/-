import React from 'react';
import {Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    helloThereStyle:{
        fontStyle: "oblique",
        color: 'red',
        fontSize:'30px'
    },
    buttonStyles:{
        color:'green',
        border:0
    }
})

export default function App(){
    const classes = useStyles()
    return(
        <div className='App'>
            <Typography 
             className={classes.helloThereStyle} 
             variant='h1'
             color="primary">
                 hello, world
            </Typography>
            <Button
            className={classes.buttonStyles} 
            color='secondary' 
            variant='outlined' >
                This is our first button
            </Button>
        </div>
    )
}