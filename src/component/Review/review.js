import React from 'react';
import GridContainer from '../Grid/GridContainer.jsx'
import GridItem from '../Grid/GridItem.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from './style';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

class Review extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{display: 'grid',overflow: 'hidden'}}>
        <React.Fragment>
          <GridContainer
            justify="center"
            style={{ width: '100%', margin: '0px' }}
          >
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2
                className={classes.title}
                style={{color:'rgb(247, 126, 99)', padding: '20px', width: '100%', margin: '0px',textAlign:'center',fontSize:'30px',
                fontFamily: 'medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif' }}
              >
               Happy Customers 
              </h2>
            </GridItem>
          </GridContainer>
          <div className={classes.appLayoutTrust}>
            <div className={classes.boxTrust}>
              <div
                className={classes.photo}
                style={{
                backgroundImage: `url('https://scontent.fdel1-4.fna.fbcdn.net/v/t1.0-1/p160x160/71093175_10157694579952002_4333641225937616896_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=5L4aehNWCDcAX_QvHVm&_nc_ht=scontent.fdel1-4.fna&_nc_tp=6&oh=6b9b19253b4a9702a2cc60921c0bfde9&oe=5F16F4B8')`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                }}
              ></div>
              <div className={classes.picText}>
                Sureshkumar Dudeja
                <div className={classes.picTextBelow}>
                <Box component="fieldset" mb={3} borderColor="transparent" style={{textAlign:'center'}}>
                <Rating name="read-only" value={5} readOnly />
                </Box>
                </div>
              </div>
              <div className={classes.belowText}>
                “Best Sweets....Best Samosa and Choolay Puri ....Best Bhaji for Marriages”
              </div>
            </div>
            <div className={classes.boxTrust}>
              <div
                className={classes.photo}
                style={{
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundImage: `url('https://scontent.fdel1-2.fna.fbcdn.net/v/t1.0-1/p160x160/15179200_631309547042218_7688536606047006457_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=VKQF2excW00AX8vJ7hO&_nc_ht=scontent.fdel1-2.fna&_nc_tp=6&oh=fd0bb89efadf605d7502fa32a8428727&oe=5F156FD8')`,
                }}
              ></div>
              <div className={classes.picText}>
                  Sweeti 
                <div className={classes.picTextBelow}>
                <Box component="fieldset" mb={3} borderColor="transparent" style={{textAlign:'center'}}>
                <Rating name="read-only" value={5} readOnly />
                </Box>
                </div>
              </div>
              <div className={classes.belowText}>
                “Old and famous sweet shop in Faridabad. Variety of sweets available. Good for sweets, brunch etc.”
              </div>
            </div>
            <div className={classes.boxTrust}>
              <div
                className={classes.photo}
                style={{
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundImage: `url('https://scontent.fdel1-4.fna.fbcdn.net/v/t1.0-1/p200x200/26169432_1929820770670667_7488194327281292479_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_oc=AQkzchz_EpQdjetiGV6o7pOa0iM09hK71tV8fdKfDF0q3hFyWhnM-znq2XITnA4aDws&_nc_ht=scontent.fdel1-4.fna&_nc_tp=6&oh=3e7f53fb371b92cc319ec1b275a11de7&oe=5F159E3F')`,
                }}
              ></div>
              <div className={classes.picText}>
                 Rakesh Kapoor
                <div className={classes.picTextBelow}>
                <Box component="fieldset" mb={3} borderColor="transparent" style={{textAlign:'center'}}>
                <Rating name="read-only" value={5} readOnly />
                </Box>
                </div>
              </div>
              <div className={classes.belowText}>
              “This place is recommended for sweets, chat, chhole puri. Place is clean and hygienic..”
              </div>
            </div>
            <div className={classes.boxTrust}>
              <div
                className={classes.photo}
                style={{
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                 backgroundImage: `url('https://scontent.fdel1-4.fna.fbcdn.net/v/t1.0-9/51475160_1009799842524233_6719245802222387200_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_oc=AQkNtzGRFoiafM2F-h8TGzHKt6azNi8OSBZQuA9goBFGRLXqGtu_7q8s8I_4EwZqD_Y&_nc_ht=scontent.fdel1-4.fna&oh=2b12708728d869cdf46787cbd6aac75e&oe=5F160AF8')`,
                }}
              ></div>
              <div className={classes.picText}>
                 Renu Kapoor
                <div className={classes.picTextBelow}>
                <Box component="fieldset" mb={3} borderColor="transparent" style={{textAlign:'center'}}>
                <Rating name="read-only" value={5} readOnly />
                </Box>
                </div>
              </div>
              <div className={classes.belowText}>
                “Recommended to us by many people - we landed up at Jaggi sweets. Yes, the food is good here. Beware that you might end up overeating.”
              </div>
            </div>
            <div className={classes.boxTrust}>
              <div
                className={classes.photo}
                style={{
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundImage: `url('https://scontent.fdel1-2.fna.fbcdn.net/v/t1.0-1/p160x160/1467283_665236983618735_975556594751033609_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=gXL8LF3PyOkAX_QLidL&_nc_ht=scontent.fdel1-2.fna&_nc_tp=6&oh=c3d82b9db3ae094e62706e97d7b26e61&oe=5F1740F0')`,
                }}
              ></div>
              <div className={classes.picText}>
                 Kalpna 
                <div className={classes.picTextBelow}>
                <Box component="fieldset" mb={3} borderColor="transparent" style={{textAlign:'center'}}>
                <Rating name="read-only" value={5} readOnly />
                </Box>
                </div>
              </div>
              <div className={classes.belowText}>
                “If you are a sweets lover and looking for some popular sweet corners around the city then Jaggi Mishthan Bhandhar is a must try!”
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Review);
