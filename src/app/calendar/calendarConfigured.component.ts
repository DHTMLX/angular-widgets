import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Calendar } from 'dhx-suite';

@Component({
  selector: 'calendar-configured',
  template: `<div #widget class='widget-box-wide'></div>`
})

export class CalendarConfiguredComponent implements OnInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  calendar: Calendar;

  ngOnInit() {
    this.calendar = new Calendar(this.container.nativeElement, {
      css: "dhx_widget--bordered",
      weekNumbers: true,
      value: new Date(),
      timePicker: true,
      timeFormat: 12,
      thisMonthOnly: false,
    });
  }

  ngOnDestroy() {
    this.calendar.destructor();
  }
}
