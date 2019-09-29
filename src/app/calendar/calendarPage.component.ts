import { Component } from '@angular/core';

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
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/calendar/calendarBase.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
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
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/calendar/calendarCdn.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
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
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/calendar/calendarConfigured.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<calendar-configured></calendar-configured>
			</div>
		</section>
		<section class="hgroup" id="configurable">
			<h3>
				Configurable with derectives
				<a href="#configured" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/calendar/calendarConfigurableWithDerectives/" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<calendar-parent></calendar-parent>
			</div>
		</section>
		<section class="hgroup" id="events">
			<h3>
				Component events
				<a href="#events" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/calendar/calendarEvents.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<calendar-events></calendar-events>
			</div>
		</section>
	<main>`
})
export class CalendarPage {}
