import React from 'react';
import { connect } from 'react-redux';
import { activeCategory } from '../provider/actions/Active';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

function Categories(props) {
  return (
    <>
      <p style={{ marginLeft: '50px', fontSize: '20px' }}>
        {' '}
        Browse our Categories
      </p>
      {props.categories.map(category => {
        console.log(category);
        return (
          <ButtonBase
            key={category.name}
            onClick={() => props.activeCategory(category.name)}
            style={{ marginLeft: '50px' }}
          >
            <Typography>{category.displayName}</Typography>
          </ButtonBase>
        );
      })}
    </>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    active: state.categories.active,
  };
};

const mapDispatchToProps = { activeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
