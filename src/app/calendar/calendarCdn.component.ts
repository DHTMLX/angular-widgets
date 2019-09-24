import { Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import fromCDN from 'from-cdn';

declare var dhx;

@Component({
  selector: 'calendar-cdn',
  template: `<div #widget class='widget-box-wide'></div>`
})

export class CalendarCdnComponent implements OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
	calendar: any;
  wait: Promise<void>;
	constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css'
    ]).then( () => {
      this.calendar = new dhx.Calendar(this.container.nativeElement, {
        css: "dhx_widget--bordered",
        value: new Date(),
      });

      this.ready.emit({ calendar: this.calendar });
    });
	}

	@Output() ready: EventEmitter<any> = new EventEmitter();

  ngOnDestroy() {
    this.calendar.destructor();
  }
}