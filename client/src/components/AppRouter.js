import React, { useContext } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from './../routes';
import { Context } from './../index';
import { SHOP_ROUTE } from './../utils/consts';

const AppRouter = () => {
  const { user } = useContext(Context);
  
  return (
    <Switch>
      { authRoutes.map(({path, Component}) => {
        return <Route key={path} exact path={path} component={Component} />
      })}
      {publicRoutes.map(({path, Component}) => {
        return <Route key={path} exact path={path} component={Component} />
      })}
      <Redirect from='*' to={SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;