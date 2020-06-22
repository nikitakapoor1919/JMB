import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import StarsIcon from '@material-ui/icons/Stars';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const styles = (theme) => ({
  root: {
    marginTop:'20px',
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#de464624',
    height:'70vh',
    '@media screen and (max-width: 1024px)': {
        height:'1000px'
    },
   // backgroundImage: `url(${require('../../images/table2.png')})`, 
    //backgroundImage: `url(${require('../../images/table.png')})`,
    backgroundPosition: "right",
    backgroundSize: "cover",
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    fontFamily: 'medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif'
  },
  content: {
    fontSize:'15px',
     color:'#930808',
    fontFamily: 'medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif'
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="../../../images/table.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
             <InfoIcon style={{fontSize:'55px'}}/>
              <Typography variant="h6" className={classes.title}>
               Description
              </Typography>
              <Typography variant="h5" className={classes.content}>
                  {'Specialist In: Sweets Catering of Veg. For Marriage Parties & Reception all types of payment or excepted here.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <StarsIcon style={{fontSize:'55px'}}/>
              <Typography variant="h6" className={classes.title}>
                Quality
              </Typography>
              <Typography variant="h5" className={classes.content}>
                {'Serving Best Quality since 1947.'}
              </Typography>
              <Box component="fieldset" mb={3} borderColor="transparent" style={{textAlign:'center'}}>
                <Rating name="read-only" value={5} readOnly />
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://material-ui.com/static/themes/onepirate/productValues3.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Exclusive rates
              </Typography>
              <Typography variant="h5" className={classes.content}>
                {'We have specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);