import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

function Appbar(){
    return (
    <AppBar position="static">
        <Toolbar>
            <IconButton 
              edge='start' 
              color='inherit' 
              arial-label='menu'
            >
              <MenuIcon /> 
            </IconButton>
        </Toolbar>
    </AppBar>
    )
}

export default Appbar
