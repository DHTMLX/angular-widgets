import { Component, ElementRef, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

import { List } from 'dhx-suite';

@Component({
  selector: 'list-events',
	template: `<div>
		<div #widget class='widget-box-wide'></div>
		<div style="display: flex; justify-content: center; padding: 20px" >
			<button class="button button--bordered">Event: {{event}}</button>
			<button class="button button--bordered">Item: {{result}}</button>
		</div>
	`
})

export class ListEventsComponent implements OnInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  list: List;

	@Input() event: string;
	@Input() result: any;

  ngOnInit() {
    this.list = new List(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`, 
      height: 300
		});
		this.list.data.load('assets/static/dataview.json')

		this.list.events.on('click', id => {
			this.event = "click" 
			this.result = id
		})
		this.list.events.on('focuschange', id => {
			this.event = "focuschange" 
			this.result = id
		})
		this.list.events.on('doubleClick', (id) => {
			this.event = "doubleClick" 
			this.result = id
		})

  }

  ngOnDestroy() {
    this.list.destructor();
  }
}
