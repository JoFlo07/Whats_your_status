import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users$: Observable<IUser[]>;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getUsers(): void {
    this.users$ = this.userService.getUsers();
  }
}
