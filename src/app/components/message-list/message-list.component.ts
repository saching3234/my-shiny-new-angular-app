import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from 'src/app/guards/confirmation/confirmation.guard';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, CanComponentDeactivate {

  constructor() { }

  confirm(): boolean {
    return confirm('Are you sure want to leave the form');
  }

  ngOnInit(): void {
  }

}
