import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-welcome-page-logged-out',
  templateUrl: './welcome-page-logged-out.component.html',
  styleUrls: ['./welcome-page-logged-out.component.scss']
})

export class WelcomePageLoggedOutComponent implements OnInit {

  public panelType: string = 'login';

  constructor() { }

  ngOnInit(): void {
  }
}
