import { StoreService } from './../../../services/store/store.service';
import { IAppState } from './../../../store/store';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  state: IAppState;
  UserName:String;
  constructor(private store: StoreService) {
    this.store.store.subscribe((AppState: IAppState) => { 
      this.state = AppState;
    });
  }

  ngOnInit() {
    this.UserName = this.state.User.Username;
  }
}
