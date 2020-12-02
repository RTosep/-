import { Grid } from '@material-ui/core';
import React from 'react';
import SimpleCard from './Card';
import coffeeMakerList from './Constant'
const Content = () => {
    const coffeeList = (coffeeListObj) => {
        return(
            <Grid item xs={12} sm={4}>
                <SimpleCard 
                {...coffeeListObj}
                />
            </Grid>
        )
    }
    return (
        <Grid container spacing={2}>
            {coffeeMakerList.map(coffeeListObj => coffeeList(coffeeListObj))}
        </Grid>
    )
}
export default Content