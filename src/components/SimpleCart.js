import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { connect } from 'react-redux';
import { If, Else } from 'react-if';
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
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },

    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = chipToDelete => props => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };
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
                  onDelete={
                    item.label === 'React' ? undefined : handleDelete(item)
                  }
                  className={classes.chip}
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

export default connect(mapStateToProps)(ChipsArray);
