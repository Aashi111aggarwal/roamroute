import React from "react";
import {CssBaseline,Grid, Switch} from '@material-ui/core';

import Header from './header/Header';
import List from './List/List';

import Map from './Map/Map';



const Maps = () => {
  return (
  <>
    <CssBaseline/>
    <Header/>
    <Grid container spacing ={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
        <List/>
        </Grid>
        <Grid item xs={12} md={8}>
        <Map/>
       </Grid>
    </Grid>
  </>
  )
}

export default Maps