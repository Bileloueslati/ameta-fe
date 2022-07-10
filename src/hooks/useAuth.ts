import { useDispatch, useSelector } from 'react-redux';
import authActions from '../store/auth/authAction';
import { RootState } from '../store/store';

export default function UseAuth() {
  const user = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const logout = () => dispatch(authActions.logout());

  const { roles } = user;

  const isSuperAdmin = roles?.includes('ROLE_SUPERADMIN');

  const isAdmin = roles?.includes('ROLE_ADMIN');

  return { ...user, isAuthenticated: !!user.id, isSuperAdmin, isAdmin, logout };
}
