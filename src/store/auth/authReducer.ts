import { ActionType } from './authAction';

export interface UserAuthType {
  id: number;
  token: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  compagny?: {id: number, name: string};
  roles: Array<'ROLE_SUPERADMIN' | 'ROLE_ADMIN' | 'ROLE_USER'>;
}

const initialState = {} as UserAuthType;

const save = (data: UserAuthType) => localStorage.setItem('auth', JSON.stringify(data));

const logout = () => localStorage.removeItem('auth');

const defaultState = (): UserAuthType =>
  localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')!) : initialState;

const authReducer = (state: UserAuthType = initialState, action: ActionType): UserAuthType => {
  switch (action.type) {
    case 'LOGIN': {
      save(action.payload);
      return {
        ...state,
        ...action.payload
      };
    }

    case 'UPDATE': {
      const newState = {
        ...state,
        ...action.payload
      };
      save(newState);
      return newState;
    }

    case 'LOGOUT': {
      logout();
      return initialState;
    }

    default:
      return defaultState();
  }
};

export default authReducer;
