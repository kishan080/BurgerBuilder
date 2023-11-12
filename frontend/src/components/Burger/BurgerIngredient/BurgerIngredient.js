import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';
import bread from '../../../assets/images/bread.png';
import bun from '../../../assets/images/bun.png';
import salad from '../../../assets/images/salad.png';
import meat from '../../../assets/images/meat.png';
import cheese from '../../../assets/images/cheese.png';
import tomato from '../../../assets/images/tomato.png';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <img src={bun} className={classes.BreadBottom} alt=""/>;
                break;
            case ( 'bread-top' ):
                ingredient =  <img src={bread} className={classes.BreadTop} alt=""/>;
                break;
            case ( 'meat' ):
                ingredient = <img src={meat} className={classes.Meat} alt=""/>;
                break;
            case ( 'cheese' ):
                ingredient = <img src={cheese} className={classes.Cheese} alt=""/>;
                break;
            case ( 'bacon' ):
                ingredient = <img src={tomato} className={classes.Bacon} alt=""/>;
                break;
            case ( 'salad' ):
                ingredient = <img src={salad} className={classes.Salad} alt=""/>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;