import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public yesterday: string = new Date(new Date().setDate(new Date().getDate() -1)).toISOString().slice(0, 10);

  constructor() { }

  ngOnInit(): void {
  }

}
