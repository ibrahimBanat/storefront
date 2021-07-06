import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

let appBar = {
  bottom: 0,
  height: '50px',
  position: 'fixed',
};

function Footer(props) {
  return (
    <div color='inherit' style={appBar}>
      <div>
        <h5>&copy; 2021 Ibrahim Banat</h5>
      </div>
    </div>
  );
}

export default Footer;
