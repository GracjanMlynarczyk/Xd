import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { appUrls } from '@urls';
import { App, Errors, Portal } from '@components/layouts';
import { Dashboard } from '@views/app';
import { NotFound } from '@views/errors';
import { Home } from '@views/portal';
import WrapperRoute from '@components/wrapper-route';

const routing = [
  {
    layout: App,
    routes: [
      {
        path: appUrls.app.dashboard,
        component: Dashboard,
        isExact: true,
        isPrivate: true,
      },
    ],
  },
  {
    layout: Errors,
    routes: [
      {
        path: appUrls.errors.notFound,
        component: NotFound,
        isExact: true,
        isPrivate: false,
      },
    ],
  },
  {
    layout: Portal,
    routes: [
      {
        path: appUrls.portal.home,
        component: Home,
        isExact: true,
        isPrivate: false,
      },
    ],
  },
];

const Routes: FC = () => (
  <Router basename='/'>
    <Switch>
      {routing.map(({ layout, routes }) =>
        routes.map(({ path, component, isExact, isPrivate }) => (
          <WrapperRoute
            key={path}
            component={component}
            layout={layout}
            exact={isExact}
            path={path}
            isPrivate={isPrivate}
          />
        ))
      )}

      <Route path='*'>
        <Redirect from='*' to={appUrls.errors.notFound} />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
