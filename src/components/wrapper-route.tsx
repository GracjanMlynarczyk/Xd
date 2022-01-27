import React, { FC } from 'react';
import { Route as ReactRoute } from 'react-router-dom';
import privateRoute from './private-route';

type WrapperRouteProps = {
  component: FC;
  exact?: boolean;
  isPrivate: boolean;
  layout: FC;
  path: string;
};

const WrapperRoute: FC<WrapperRouteProps> = ({ exact, path, component: Component, layout: Layout, isPrivate }) => {
  const Route = isPrivate ? privateRoute : ReactRoute;

  return (
    <Route exact={exact} path={path}>
      {Layout ? (
        <Layout>
          <Component />
        </Layout>
      ) : (
        <Component />
      )}
    </Route>
  );
};

export default WrapperRoute;
