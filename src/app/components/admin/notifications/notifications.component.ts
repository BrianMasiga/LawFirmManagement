import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".notification-menu").mCustomScrollbar({
      autoHideScrollbar: true,
      scrollbarPosition: "inside",
      theme:"light-1"
    });
  }

}
