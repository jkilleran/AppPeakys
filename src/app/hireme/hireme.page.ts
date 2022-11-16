import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';

@Component({
  selector: 'app-hireme',
  templateUrl: './hireme.page.html',
  styleUrls: ['./hireme.page.scss'],
})
export class HiremePage implements OnInit {
  @ViewChild('popover') popover;

  constructor() { }
  
  ngOnInit() {
  }

}
