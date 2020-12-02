import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
        
                    自助借伞
                
                </Typography>
            </Box>
        <AccountCircleIcon />
        </Toolbar>
    </AppBar>)
}
export default Header