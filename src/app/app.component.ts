import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'prism' },
    { title: 'Characters', url: '/characters', icon: 'id-card' },
    { title: 'Favorite moments', url: '/favoritemoments', icon: 'Film' },
    { title: 'About the serie', url: '/about', icon: 'information-circle' },
    { title: 'In my live', url: '/inmylive', icon: 'water' },
    { title: 'Hire me', url: '/hireme', icon: 'walk' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
