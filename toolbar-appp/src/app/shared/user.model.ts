import { IUser } from './user';

export class User implements IUser {
    id:           number;
    username:     string;
    friendlyname: string;
    email:        string;
    password:     string;
    role:         string;
  }
