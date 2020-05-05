import { IAppState } from './../../store/store';
import { IUser } from './../../interfaces/administration/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from './../../store/actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  User: Observable<IUser>;
  constructor(public store:Store<IAppState>) { }


  AddUser(data: IUser) {
    this.store.dispatch(new actions.AddUser(data));
  }

  ClearUser(){
    this.store.dispatch(new actions.Clear());
  }
}
