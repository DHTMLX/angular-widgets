import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'list-page',
  template: `
	<main #main style="max-height: calc(100vh - 57px); overflow: auto">
		<section class="{{activeExample === 'basic' ? 'active hgroup' : 'hgroup'}}" id="basic">
			<h3>
				NPM basic inintialization 
				<a href="#basic" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listBase.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-base></list-base>
			</div>
		</section>
		<section class="{{activeExample === 'cdn' ? 'active hgroup' : 'hgroup'}}" id="cdn">
			<h3>
				CDN basic inintialization 
				<a href="#cdn" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listCdn.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-cdn></list-cdn>
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
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listConfigured.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-configured></list-configured>
			</div>
		</section>
		<section class="{{activeExample === 'configurable' ? 'active hgroup' : 'hgroup'}}" id="configurable">
			<h3>
				Configurable with derectives
				<a href="#configurable" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listConfigured.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-parent></list-parent>
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
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listConfigured.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-events></list-events>
			</div>
		</section>
		<section class="{{activeExample === 'data' ? 'active hgroup' : 'hgroup'}}"  id="data">
			<h3>
				Work with data
				<a href="#data" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listConfigured.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-data></list-data>
			</div>
		</section>
	<main>`
})
export class ListPage {
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
