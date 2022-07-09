import { useDispatch, useSelector } from 'react-redux';
import authActions from '../store/auth/authAction';
import { RootState } from '../store/store';

export default function UseAuth() {
  const user = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const logout = () => dispatch(authActions.logout());

  return { isAuthenticated: !!user.id, user, logout };
}
