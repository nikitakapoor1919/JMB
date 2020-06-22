import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(8, 3),
    height:'400px',
    backgroundImage:`url(${require('../../images/image2.jpg')})`,
    backgroundSize: "cover",
  },
  cardSecond: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:'#ffc071',
    padding: theme.spacing(8, 3),
    color:'white',
    fontSize:'20px'
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
});

function ProductCTA(props) {
  const { classes } = props;
  return (
    <Container className={classes.root} component="section">
      <Grid container>
      <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.cardSecond} >
              <Typography variant="h2" component="h2" >
              <QueryBuilderIcon style={{position:'relative',top:'10px',fontSize:'70px'}}/>6:00-20:30
              </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img
              height='200px'
              src={require('../../images/image2.jpg')}
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);