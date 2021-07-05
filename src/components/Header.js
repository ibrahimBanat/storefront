import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { showCart } from '../provider/actions/showCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

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
        <IconButton aria-label='cart'>
          <StyledBadge badgeContent={props.cart.cart.length} color='secondary'>
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
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
