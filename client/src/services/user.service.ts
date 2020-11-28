import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.models';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static readonly url = 'http://42ca1c959eb9.ngrok.io';
  public users: IUser[] = [];

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get(UserService.url + '/users').pipe(
      map((users: IUser[]) => {
        const noBot = users
          .filter((memb) => !memb.is_bot)
          .filter((m) => m.id !== 'USLACKBOT' && m.id !== 'U01FH2JSUPQ');
        return noBot;
      })
    );
  }
}
