import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { showCart } from '../provider/actions/showCart';

const useStyles = makeStyles(theme => ({
  space: {
    justifyContent: 'space-between',
  },
}));
function Header(props) {
  const style = useStyles();
  return (
    <AppBar color='' position='static' style={{ backgroundColor: '#FB2E86' }}>
      <Toolbar className={style.space}>
        <Button>OUR STORE</Button>
        <Button>Cart({props.cart.cart.length})</Button>
      </Toolbar>
    </AppBar>
  );
}
const mapStateToprops = state => {
  console.log(state);
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToprops)(Header);
