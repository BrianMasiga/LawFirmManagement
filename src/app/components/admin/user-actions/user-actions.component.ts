import { StoreService } from './../../../services/store/store.service';
import { IUser } from './../../../interfaces/administration/User';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent {
  constructor(private store: StoreService) { }

  LogOut($event) {
    $event.stopPropagation();
    const user: IUser = { LoggedIn: false };
    sessionStorage.setItem('CurrentUser', JSON.stringify(user));
    this.store.AddUser(user);
  }
}
