import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { redirectToLogin } from '@utils';
import { useAppSelector } from '@redux/hooks';
import { loginUser } from '@redux/user/actions';
import { useQueryParams } from '@hooks';

type PrivateRouteProps = {
  children: ReactNode;
  path: string;
  exact?: boolean;
};

type Props = PrivateRouteProps & RouteComponentProps;

const PrivateRoute: FC<Props> = ({ children, exact = false, path, history }) => {
  const { user } = useAppSelector(({ user }) => ({ user }));
  const dispatch = useDispatch();

  const { token: tokenFromUrl } = useQueryParams();

  useEffect(() => {
    const checkToken = async (): Promise<void> => {
      if (user.isLoggedIn) return;
      const token = tokenFromUrl || localStorage.getItem('token');

      if (token === null) {
        redirectToLogin();
        return;
      }

      await dispatch(loginUser(token as string));

      if (tokenFromUrl) {
        const { pathname } = window.location;
        history.replace(pathname);
      }
    };

    checkToken();
  }, []);

  return (
    <Route exact={exact} path={path}>
      {user.isLoggedIn ? children : null}
    </Route>
  );
};

export default withRouter(PrivateRoute);
