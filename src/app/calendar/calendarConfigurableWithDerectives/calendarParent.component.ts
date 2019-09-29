import { Component } from '@angular/core';

@Component({
  selector: 'calendar-parent',
  template: `<calendar-child 
    [css]="'dhx_widget--bordered'"
    [weekNumbers]=true
    [value]=this.date
    [timePicker]=true
    [timeFormat]=24
    [thisMonthOnly]=false
    class='widget-box-wide'></calendar-child>`
})

export class CalendarParent {
  date = new Date()
}