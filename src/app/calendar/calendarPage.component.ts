import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
@Component({
  selector: 'calendar-page',
  template: `
	<main #main style="max-height: calc(100vh - 57px); overflow: auto">
		<section class="{{activeExample === 'basic' ? 'active hgroup' : 'hgroup'}}" id="basic" fragment="basic">
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
		<section class="{{activeExample === 'cdn' ? 'active hgroup' : 'hgroup'}}" id="cdn" fragment="cdn">
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
		<section class="{{activeExample === 'configured' ? 'active hgroup' : 'hgroup'}}" id="configured">
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
		<section class="{{activeExample === 'configurable' ? 'active hgroup' : 'hgroup'}}" id="configurable">
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
		<section class="{{activeExample === 'events' ? 'active hgroup' : 'hgroup'}}" id="events">
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
export class CalendarPage {
	@ViewChild('main', {static: true}) container: ElementRef;
	@Input() activeExample: string;
	constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
				this.activeExample = event.url.split('#')[1] && event.url.split('#')[1]
			}
			if (event instanceof NavigationEnd && window.location.hash && this.container.nativeElement.querySelector(window.location.hash)) {
				const distanceToScroll = this.container.nativeElement.querySelector(window.location.hash).getBoundingClientRect().top + this.container.nativeElement.scrollTop;
				this.container.nativeElement.scrollTo({
					top: distanceToScroll - 57,
					behavior: 'smooth',
				})
			}
	 });
	}
	ngAfterViewInit(){
		if (window.location.hash && this.container.nativeElement.querySelector(window.location.hash)) {
			setTimeout(() => {
				const distanceToScroll = this.container.nativeElement.querySelector(window.location.hash).getBoundingClientRect().top + this.container.nativeElement.scrollTop;
				this.container.nativeElement.scrollTo({
					top: distanceToScroll - 57,
					behavior: 'smooth',
				})
			}, 500);
		}
	}
}
