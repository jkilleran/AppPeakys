import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';



@Component({
  selector: 'app-favoritemoments',
  templateUrl: './favoritemoments.page.html',
  styleUrls: ['./favoritemoments.page.scss'],
})
export class FavoritemomentsPage implements OnInit {

  constructor(private videoPlayer: VideoPlayer) { }



  ngOnInit() {
  }

}
