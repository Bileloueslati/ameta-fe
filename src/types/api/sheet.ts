import { User } from "./user";

export interface SheetT {
  id: number;
  createdAt: string;
  updatedAt: string;
  creator: User;
  lastModifier: User;
  reference: string;
  shipementDate: string;
  way: string;
  plate: string;
  fromPlace: string;
  toPlace: string;

}
