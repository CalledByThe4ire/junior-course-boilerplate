import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import classnames from 'classnames';

import styles from './app.module.scss';
import HomePage from '../pages/home-page';
import ItemContainer from '../../containers/item-container';

const App = () => {
  return (
    <div className={classnames(styles.App)}>
      <Route exact path="/" component={HomePage} />

      <Route
        path="/product/:id"
        render={({ match: { params } }) => {
          const { id } = params;
          return <ItemContainer id={Number(id)} />;
        }}
      />
    </div>
  );
};

export default withRouter(App);
