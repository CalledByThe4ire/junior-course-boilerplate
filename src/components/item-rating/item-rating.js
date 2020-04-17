import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './item-rating.module.scss';
import IconItemRating from '../icon-item-rating';

const ItemRating = ({isFilled}) => (
  <div
    className={
      classnames(
        styles.ItemRating,
        {[styles.itemRatingIsFilled]: isFilled},
      )
    }
  >
    <IconItemRating isFilled={isFilled} />
  </div>
);

ItemRating.propTypes = {
  isFilled: propTypes.bool
};

export default ItemRating;
