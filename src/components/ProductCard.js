import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import CardMedia from '@material-ui/core/CardMedia';
import { addProduct } from '../provider/actions/addProduct';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const ImgMediaCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={props.alt}
          height='200'
          image={props.image}
          title={props.name}
        />
        <Typography gutterBottom variant='h6' component='h2'>
          {props.name}
        </Typography>
      </CardActionArea>

      <CardActions>
        <Button
          size='small'
          color='primary'
          onClick={count => {
            if (props.count) props.addProduct(props.product);
            else alert('out of stock');
          }}
        >
          Add To Cart
        </Button>
        <Button size='small' color='primary'>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
const mapStateToProps = state => {
  return { active: state.categories.active, products: state.products.products };
};
const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ImgMediaCard);
