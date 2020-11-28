import { Injectable } from '@angular/core';
import { IUser } from '../../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: IUser[] = [];

  constructor() { }

  public getUsers(): IUser[] {
    return this.users;
  }
}
