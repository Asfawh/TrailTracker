import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function useLogout() {
  const { dispatch } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  return logout;
}

export default useLogout;
