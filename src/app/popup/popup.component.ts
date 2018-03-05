import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    chrome.tabs.getSelected(tab => {
      chrome.tabs.executeScript(tab.id, {
        file: 'content-script.js'
      }, result => {
        console.log('%c executeScript', 'color:blue', result);
      });
    });
  }

}
