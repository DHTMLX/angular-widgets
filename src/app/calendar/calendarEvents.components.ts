import { Component, ElementRef, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

import { Calendar } from 'dhx-suite';

@Component({
  selector: 'calendar-events',
	template: `<div>
		<div #widget class='widget-box-wide'></div>
		<div style="display: flex; justify-content: center; padding: 20px" >
			<button class="button button--bordered">Event: {{event}}</button>
			<button class="button button--bordered">Item: {{result}}</button>
		</div>
	`
})

export class CalendarEventsComponent implements OnInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  calendar: Calendar;

	@Input() event: string;
	@Input() result: any;

  ngOnInit() {
    this.calendar = new Calendar(this.container.nativeElement, {
      css: "dhx_widget--bordered",
      value: new Date(),
		});

		this.calendar.events.on('change', id => {
			this.event = "change" 
			this.result = id.toString()
		})
		this.calendar.events.on('beforeChange', id => {
			this.event = "beforeChange" 
			this.result = id.toString()
		})
		this.calendar.events.on('dateHover', (event, date) => {
			this.event = "dateHover" 
			this.result = date.toString()
		})

  }

  ngOnDestroy() {
    this.calendar.destructor();
  }
}
