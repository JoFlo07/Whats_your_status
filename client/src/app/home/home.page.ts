import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../../models/user.models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private userService: UserService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getUsers(): IUser[] {
    return this.userService.getUsers();
  }

}
