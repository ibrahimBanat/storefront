import React from 'react';
import { connect } from 'react-redux';

import { addProduct } from '../provider/actions/addProduct';
import ProductCard from './ProductCard';
import GridList from '@material-ui/core/GridList';
import { GridListTile } from '@material-ui/core';

function Products(props) {
  return (
    <>
      <p style={{ textAlign: 'center', fontSize: '25px' }}>{props.active}</p>
      <br />
      <GridList cols={3}>
        {props.products.map((product, idx) => {
          if (props.active === product.category) {
            return (
              <GridListTile key={idx} rows={'auto'}>
                <ProductCard
                  className={`cards ${product.name}`}
                  image={product.image}
                  alt={product.name}
                  style={{ marginLeft: '80px', marginTop: '10px' }}
                  count={product.count}
                  name={product.name}
                  key={product.name}
                  product={product}
                />
              </GridListTile>
            );
          } else {
            return '';
          }
        })}
      </GridList>
    </>
  );
}

const mapStateToProps = state => {
  return { active: state.categories.active, products: state.products.products };
};
const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
