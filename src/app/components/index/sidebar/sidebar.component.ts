import { IAppState } from './../../../store/store';
import { IUser } from './../../../interfaces/administration/User';
import { StoreService } from './../../../services/store/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  FullNames: String;
  Title: String;
  state: IUser;
  constructor(private store: StoreService) {
    this.store.store.subscribe((AppState: IAppState) => {
      this.state = AppState.User;
    });
  }

  ngOnInit() {
    this.FullNames = `${this.state.FirstName} ${this.state.Surname}`;
    this.Title = this.state.JobTitle;
  }

}
