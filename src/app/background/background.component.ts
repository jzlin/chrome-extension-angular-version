import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  template: `background works!`
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    chrome.runtime.onStartup.addListener(() => {
      console.log('%c onStartup', 'color:green');
      chrome.runtime.openOptionsPage();
    });

    chrome.runtime.onInstalled.addListener(details => {
      console.log('%c onInstalled', 'color:green', details);
    });

    // for debug
    chrome.commands.onCommand.addListener(command => {
      if (command === 'reload_extension') {
        chrome.runtime.reload();
      }
    });
    // debug end
  }

}
