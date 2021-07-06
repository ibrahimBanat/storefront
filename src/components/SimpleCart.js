import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { connect } from 'react-redux';
import { If, Else } from 'react-if';
import { deleteFromCart } from '../provider/actions/deleteFromCart';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const ChipsArray = props => {
  const classes = useStyles();

  console.log(props);
  return (
    <>
      <If condition={() => props.cart.length !== 0}>
        <Paper component='ul' className={classes.root}>
          {props.cart.map((item, idx) => {
            console.log(item);
            return (
              <li key={idx}>
                <Chip
                  label={item.name}
                  onDelete={() => {
                    props.deleteFromCart(item);
                  }}
                />
              </li>
            );
          })}
        </Paper>
      </If>
      <Else>{}</Else>
    </>
  );
};
const mapStateToProps = state => {
  return { cart: state.cart.cart };
};
const mapDispatchToProps = { deleteFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(ChipsArray);
