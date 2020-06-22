import React from 'react';
import './styles.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
function Footer() {
  return (
    <footer className="footer-distributed">
		<div className="footer-left">
 
		{/* <p className="footer-links">
		<a href="https://www.facebook.com/pg/jmb.co.in/reviews/?ref=page_internal">Reviews</a>
		</p> */}
 
		<p className="footer-company-name" style={{fontWeight:600}}>JMB&copy; 2020</p>
		</div>
 
		<div className="footer-center">
	
		<div>
	  <PhoneIcon style={{position:'relative',top:'5px',color:'white'}}/>
		<p style={{marginLeft:'10px',marginBottom:'10px'}}><Link to="+91 9999664382 ">+91 99996 64382</Link></p>
		</div>

		<div>
	  <QueryBuilderIcon style={{position:'relative',top:'5px',color:'white'}}/>
		<p style={{marginLeft:'10px',marginBottom:'10px'}}><Link to="6:00-21:00 ">6:00-21:00</Link></p>
		</div>
    <div>
	  <LocationOnIcon style={{position:'relative',color:'white'}}/>
		<p  style={{marginLeft:'10px',marginBottom:'10px'}}><Link to="Shop 17, Main Market, NIT 5, NIT, Faridabad">Shop 17, Main Market, NIT 5, NIT, Faridabad</Link></p>
		</div>
		</div>
		<div className="footer-right">
		<div className="footer-icons">
 
		<a href="https://www.facebook.com/jmb.co.in/"><FacebookIcon style={{position:'relative',top:'5px'}}/></a>
		<a href="#"><TwitterIcon style={{position:'relative',top:'5px'}}/></a>
		<a href="#"><LinkedInIcon style={{position:'relative',top:'5px'}}/></a>
		<a href="https://github.com/nikitakapoor1919/MyBlog"><GitHubIcon style={{position:'relative',top:'5px'}}/></a>
 
		</div>
 
		</div>
 
		</footer>
  );
}

export default Footer;