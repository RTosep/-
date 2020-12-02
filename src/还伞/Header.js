import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(()=>({
    typographyStyle:{
        display:"flex",
        flex:1,
        justifyContent:"center"
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
    <AppBar position='static'>
        <Toolbar>
        <ArrowBackIcon />  
            <Box className={classes.typographyStyle}>
          
                <Typography >
        
                    自助还伞
                
                </Typography>
            </Box>
        <BluetoothIcon />
        </Toolbar>
    </AppBar>)
}
export default Header