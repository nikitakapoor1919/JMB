import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import NavStyle from './styles';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import RateReviewIcon from '@material-ui/icons/RateReview';

const navLinks = [
  {
    img: <RateReviewIcon/>,
    url: 'https://www.facebook.com/pg/jmb.co.in/reviews/?ref=page_internal',
    name: 'Reviews',
  },
  {
    img: <ContactPhoneIcon/>,
    url: '/',
    name: 'Contact Us',
  },
];
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
    };
  }

  // handleClick = () => {
  //   switch (this.state.status) {
  //     case false:
  //       this.setState({
  //         status: true,
  //       });
  //       break;
  //     case true:
  //       this.setState({
  //         status: false,
  //       });
  //       break;
  //   }
  // };

  // closeClick = () => {
  //   switch (this.state.status) {
  //     case false:
  //       this.setState({
  //         status: true,
  //       });
  //       break;
  //     case true:
  //       this.setState({
  //         status: false,
  //       });
  //       break;
  //   }
  // };
  render() {
    const { classes } = this.props;
    return this.state.status ? (
      <div style={{ background: '#202122' }}>
        <div className={classes.wrap}>
          <div className={classes.topNav}>
            <div>
              <span className={classes.togglebtn} >
                <img src="https://i.postimg.cc/5tKr3BLp/JMB.png"></img>
              </span>
            </div>
          </div>
          <div className={classes.menu}>
            <ul className={classes.list}>
              {navLinks.map(({ img, url, name }) => (
                <li className={classes.listItem}>
                  <a className={classes.link} href={url}>
                     <span  style={{position:'relative',top:'7px'}}>
                     {img}
                     </span>
                    <span className={classes.name}>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ) : (
      <div className={classes.topNav}>
        <div>
              <span className={classes.togglebtn} >
                <img src="https://i.postimg.cc/5tKr3BLp/JMB.png"></img>
              </span>
          {/* <span className={classes.togglebtn} onClick={this.handleClick}>
            <img src="https://i.postimg.cc/fL7P99SQ/Hamburger.png"></img>
          </span> */}
        </div>
      </div>
    );
  }
}

export default withStyles(NavStyle)(Nav);
