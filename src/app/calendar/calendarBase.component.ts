import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Calendar } from 'dhx-suite';

@Component({
  selector: 'calendar-base',
  template: `<div #widget class='widget-box-wide'></div>`
})

export class CalendarBaseComponent implements OnInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  calendar: Calendar;

  ngOnInit() {
    this.calendar = new Calendar(this.container.nativeElement, {
      css: "dhx_widget--bordered",
      value: new Date(),
    });
  }

  ngOnDestroy() {
    this.calendar.destructor();
  }
}
