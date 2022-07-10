export interface User extends Users {}

export interface Users {
  id: number;
  createdAt: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  isActive: boolean;
  compagny?: {
    name: string;
    id: number;
  };
}
