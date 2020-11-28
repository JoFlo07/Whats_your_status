import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserList } from '../models/user.models';
import { slackToken } from '../../.private';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static readonly url = 'https://slack.com/api';
  public users: IUser[] = [];

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpClient
      .get(UserService.url + '/users.list', {
        headers: { Authorization: `Bearer ${slackToken}`, 'Conten-Type': ''  },
      })
      .pipe(
        tap((users) => console.log(users)),
        map((users: IUserList) =>
          users.members.filter((memb) => !memb.user.is_bot)
        )
      );
  }
}
