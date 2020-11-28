import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../../models/user.models';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
