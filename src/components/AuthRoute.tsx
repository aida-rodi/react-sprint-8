import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth/cordova';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* export interface IAuthRouteProps {} */

const AuthRoute = (props: { children: any; }) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setloading(false)
    } else {
      console.log('unauthorized');
      navigate('/login')
    }
  });

  if (loading) return <p>Loading...</p>

  return <>{children}</>;
};

export default AuthRoute
