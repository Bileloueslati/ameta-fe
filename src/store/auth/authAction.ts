import { UserAuthType } from './authReducer';

export type ActionType = {
  type: string;
  payload: UserAuthType;
};

const login = (userData: UserAuthType, callBack?: () => void): ActionType => {
  return {
    type: 'LOGIN',
    payload: userData
  };
};

const update = (userData: UserAuthType, callBack?: () => void): ActionType => {
  return {
    type: 'UPDATE',
    payload: userData
  };
};

const logout = (): ActionType => {
  return {
    type: 'LOGOUT',
    payload: {} as UserAuthType
  };
};

const authActions = {
  login,
  update,
  logout
};

export default authActions;
