import React, { Component } from 'react'
import Nav from '../component/NavBar/Nav'
import withStyles from '@material-ui/core/styles/withStyles';
import HomeStyle from './styles';
import Footer from '../component/Footer/footer';
import About from '../component/About/About'
import Gallery from '../component/ImageGallery/images'
import Review from '../component/Review/review'
import Team from '../component/Owners/Team'

class home extends Component {
    render() {
      const {classes}=this.props
        return (
          <div style={{overflowX:'hidden'}}>
              <Nav/>
              <div
                className={classes.img}
                style={{
                backgroundImage: `url(${require('../images/landing4.png')})`,
                backgroundPosition: "right",
                backgroundSize: "cover",
                }}
              ></div>
              <img src={require('../images/landingpage.png')} className={classes.img}/>
              {/* <About/> */}
              <Gallery/>
              <Team/>
              <div  style={{  backgroundImage: `url(${require('../images/table2.png')})`, }}>
              <Review/>
              </div>
              <Footer/>
          </div>
        )
    }
}

export default withStyles(HomeStyle)(home)
