import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import NavStyle from './styles';

const navLinks = [
  {
    img: 'https://i.postimg.cc/QNPtzZKK/Home-icon.png',
    url: '/',
    name: 'Home',
  },
  {
    img: 'https://i.postimg.cc/5y3MbvNt/Blog-icon.png',
    url: '/',
    name: 'Blogs',
  },
  {
    img: 'https://i.postimg.cc/jdgGcRDB/Help-icon.png',
    url: '/faq',
    name: 'Help and FAQ',
  },
];
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
    };
  }

  handleClick = () => {
    switch (this.state.status) {
      case false:
        this.setState({
          status: true,
        });
        // {
        //   this.props.getStatus(1);
        // }
        break;
      case true:
        this.setState({
          status: false,
        });
        // {
        //   this.props.getStatus(0);
        // }
        break;
    }
  };

  closeClick = () => {
    switch (this.state.status) {
      case false:
        this.setState({
          status: true,
        });
        // {
        //   this.props.getStatus(1);
        // }
        break;
      case true:
        this.setState({
          status: false,
        });
        // {
        //   this.props.getStatus(0);
        // }
        // break;
    }
  };
  render() {
    const { classes } = this.props;
    return this.state.status ? (
      <div style={{ background: '#202122' }}>
        <div className={classes.wrap}>
          <div className={classes.topNav}>
            <div>
              <span className={classes.togglebtn} onClick={this.handleClick}>
                <img src="https://i.postimg.cc/fL7P99SQ/Hamburger.png"></img>
              </span>
            </div>
          </div>
          <div className={classes.menu}>
            <ul className={classes.list}>
              <div className={classes.logo}>
                <img src="https://i.postimg.cc/V6tCGssg/logo.png"></img>
              </div>
              {navLinks.map(({ img, url, name }) => (
                <li className={classes.listItem}>
                  <a className={classes.link} href={url}>
                    <img style={{marginTop:'10px'}} src={img}></img>
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
          <span className={classes.togglebtn} onClick={this.handleClick}>
            <img src="https://i.postimg.cc/fL7P99SQ/Hamburger.png"></img>
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(NavStyle)(Nav);
