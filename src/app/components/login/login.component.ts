import { IUser } from './../../interfaces/administration/User';
import { StoreService } from './../../services/store/store.service';
import { NotificationParam } from './../../interfaces/notification.interface';
import { environment } from './../../../environments/environment';
import { Component } from '@angular/core';
import * as NoteOptions from './../../enums/notifications/type.enum';
import * as NHelpers from './../../helpers/notifications.helpers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  ImageUrl: string = environment.LoginImageSrc;
  constructor(
    private store: StoreService,
    private router: Router
  ) { }

  signIn(form) {
    if (!form.valid) {
      let error: NotificationParam = {
        NType: NoteOptions.NotificationType.Error,
        Position: NoteOptions.NotificationPosition.BottmRight,
        Rounded: false,
        Delay: 50000,
        Size: NoteOptions.NotificationSize.mini,
        Title: `Fields required`,
        Message: `username and password are required`,
        Type: NoteOptions.Type.Alert
      };
      NHelpers.notify(error);
    } else {
      let _user: IUser = {
        LoggedIn: true,
        FirstName: `Kopano`,
        Surname: `Sereetsi`,
        JobTitle:`Developer`,
        Username: 'sereetsikc@gmail.com',
        Token: `hajsdhfiuy32uih23iquortgfvhsb,fjx09074836528`,
      };
      sessionStorage.setItem('CurrentUser', JSON.stringify(_user));
      this.store.AddUser(_user);
      this.router.navigate(['/index']);
    }
  }
}
