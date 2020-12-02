import React from 'react';
import {Grid} from '@material-ui/core'
import Header from './Header';
import Content from './Content';

const App = () => (
    <Grid container direction='column'>
        <Grid item>
            <Header />
        </Grid>
        <Grid item container>
            {/* 屏幕小尺寸的时候填满整个屏幕，中等尺寸的时候左右两边留出padding */}
            <Grid item xs={0} sm={2}></Grid>
            <Grid item xs={12} sm={8}>
                <Content />
            </Grid>
            <Grid item xs={0} sm={2}></Grid>
        </Grid>
    </Grid>
)
export default App