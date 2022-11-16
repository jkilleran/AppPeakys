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

  
  isOpen = false;
  isOpen2 = false;
  isOpen3 = false;
  isOpen4 = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  presentPopover2(e: Event) {
    this.popover.event = e;
    this.isOpen2 = true;
  }
  presentPopover3(e: Event) {
    this.popover.event = e;
    this.isOpen3 = true;
  }
  presentPopover4(e: Event) {
    this.popover.event = e;
    this.isOpen4 = true;
  }

  

  ngOnInit() {
  }

}
