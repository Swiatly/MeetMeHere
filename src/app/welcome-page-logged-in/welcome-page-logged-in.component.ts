import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page-logged-in',
  templateUrl: './welcome-page-logged-in.component.html',
  styleUrls: ['./welcome-page-logged-in.component.scss']
})
export class WelcomePageLoggedInComponent implements OnInit {

  public hasProfilePicture: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
