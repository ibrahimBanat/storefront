import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  space: {
    justifyContent: 'space-between',
  },
}));
function Header(props) {
  const style = useStyles();
  return (
    <AppBar color='' position='static' style={{ marginBottom: '20px' }}>
      <Toolbar className={style.space}>
        <Button>OUR STORE</Button>
        <Button>cart</Button>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
