import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { List } from 'dhx-suite';

@Component({
  selector: 'list-base',
  template: `<div #widget class='widget-box-wide'></div>`
})

export class ListBaseComponent implements OnInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  list: List;

  ngOnInit() {
    this.list = new List(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`, 
      height: 300
    });
    this.list.data.load('assets/static/dataview.json')
  }

  ngOnDestroy() {
    this.list.destructor();
  }
}
