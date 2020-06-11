const NavStyle = {
    wrap: {
      margin: '0',
      padding: '0',
    },
    menu: {
      background: '#202122',
      height: '100vh',
      width: '270px',
      position: 'fixed',
      zIndex: '99',
      top: '60px',
      left:'0px'
    },
    list: {
        padding: '0',
        margin: '0',
        top: '20px',
        position: 'absolute',
        width: '250px',
      },
    link: {
      color: '#fff',
      textDecoration: 'none',
      display: 'block',
      padding: '10px',
    },
    listItem: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '0.01em',
      marginLeft: '5px',
      marginRight: '5px',
      opacity: '0.5',
      '&:hover': {
        opacity: '1',
        cursor: 'pointer',
        borderRadius: '8px',
        background: 'rgba(255, 255, 255, 0.1)',
      },
    },
    togglebtn: {
      marginLeft: '20px',
      marginTop: '10px',
      cursor: 'pointer',
      marginBottom: '10px',
      top: '15px',
      position: 'relative',
    },
    topNav: {
      backgroundColor: '#202122',
      overflow: 'hidden',
      width: '100%',
      position: 'fixed',
      zIndex: '99',
      height: '60px',
      top:'0px',
      left:'0px'
    },
    name: {
        marginLeft: '20px',
      },
  };
  
  export default NavStyle;
  