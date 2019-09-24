import { Component, ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'calendar-page',
  template: `
	<main>
		<section class="hgroup active" id="basic">
			<h3>
				NPM basic inintialization 
				<a href="#basic" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/richtext/calendarBase.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<calendar-base></calendar-base>
			</div>
		</section>
		<section class="hgroup" id="cdn">
			<h3>
				CDN basic inintialization 
				<a href="#cdn" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/richtext/calendarCdn.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<calendar-cdn></calendar-cdn>
			</div>
		</section>
		<section class="hgroup" id="configured">
			<h3>
				Configured component
				<a href="#configured" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/richtext/calendarConfigured.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<calendar-configured></calendar-configured>
			</div>
		</section>
	<main>`
})
export class CalendarPage {}
