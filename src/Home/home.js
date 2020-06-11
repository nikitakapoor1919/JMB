import React, { Component } from 'react'
import Nav from '../component/NavBar/Nav'
import withStyles from '@material-ui/core/styles/withStyles';
import HomeStyle from './styles';
import Grid from '@material-ui/core/Grid';

class home extends Component {
    render() {
      const {classes}=this.props
        return (
          <div>
              <Nav/>
              <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12}>
                   <div className={classes.heading} >Select what you're into. We'll help you find great things to read.</div>
                </Grid>
              </Grid>
          </div>
        )
    }
}

export default withStyles(HomeStyle)(home)
