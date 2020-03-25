import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './price.module.scss';
import LogRender from '../log-render';

class Price extends LogRender {
  render() {
    const { value, isPrimary = true } = this.props;
    return (
      <span
        className={classnames(
          'itemListProductsprice',
          styles.price,
          { [styles.pricePrimary]: isPrimary },
          { [styles.priceSecondary]: !isPrimary }
        )}
      >
        {value.toLocaleString('en-US').replace(/,/g, ' ')}&nbsp;&#8381;
      </span>
    );
  }
}

Price.propTypes = {
  value: propTypes.number,
  isPrimary: propTypes.bool
};

export default Price;
