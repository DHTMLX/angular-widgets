import { Component, ElementRef, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';

import { Calendar } from 'dhx-suite';

@Component({
  selector: 'calendar-child',
  template: `<div #widget class='widget-box-wide'></div>`
})

export class CalendarChild implements OnInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  calendar: Calendar;

  @Input() css: string;
  @Input() weekNumbers: boolean;
  @Input() timePicker: boolean;
  @Input() timeFormat: number;
  @Input() thisMonthOnly: boolean;
  @Input() value: Date;


  ngOnInit() {
    this.calendar = new Calendar(this.container.nativeElement, {
      css: this.css,
      weekNumbers: this.weekNumbers,
      value: this.value,
      timePicker: this.timePicker,
      timeFormat: this.timeFormat,
      thisMonthOnly: this.thisMonthOnly,
    });
  }

  ngOnDestroy() {
    this.calendar.destructor();
  }
}
