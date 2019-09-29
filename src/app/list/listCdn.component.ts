import { Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import fromCDN from 'from-cdn';

declare var dhx;

@Component({
  selector: 'list-cdn',
  template: `<div #widget class='widget-box-wide'></div>`
})

export class ListCdnComponent implements OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
	list: any;
  wait: Promise<void>;
	constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css'
    ]).then( () => {
      this.list = new dhx.List(this.container.nativeElement, {
        css: "dhx_widget--bordered dhx_widget--bg_white",
        template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`, 
        height: 300
      });
      this.list.data.load('assets/static/dataview.json')

      this.ready.emit({ list: this.list });
    });
	}

	@Output() ready: EventEmitter<any> = new EventEmitter();

  ngOnDestroy() {
    this.list.destructor();
  }
}