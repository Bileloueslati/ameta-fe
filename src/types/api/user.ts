export interface User extends Users {}

export interface Users {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  compagny?: {
    name: string;
    id: number;
  };
}
