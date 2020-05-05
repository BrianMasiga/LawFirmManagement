import { Component, OnInit } from '@angular/core';

declare var $;
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".message-menu").mCustomScrollbar({
      autoHideScrollbar: true,
      scrollbarPosition: "inside",
      theme:"light-1"
      
    });
  }

}
