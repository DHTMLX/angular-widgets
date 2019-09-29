import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { List } from 'dhx-suite';

@Component({
  selector: 'list-configured',
  template: `<div #widget class='widget-box-wide'></div>`
})

export class ListConfiguredComponent implements OnInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  list: List;

  ngOnInit() {
    this.list = new List(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: item => `<div style="height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;"><strong>${item.title}</strong> <span>${item.short}</span></div>`, 
      height: 300,
      itemHeight: 70,
    });
    this.list.data.load('assets/static/dataview.json')
  }

  ngOnDestroy() {
    this.list.destructor();
  }
}
