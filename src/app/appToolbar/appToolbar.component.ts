import { Component, ElementRef, Input, OnInit, Output, EventEmitter, OnDestroy, ViewChild, SimpleChanges, SimpleChange } from '@angular/core';
import { Toolbar } from 'dhx-suite';
import { Router } from '@angular/router';

const TOOOLBAR_LINKS = {
	all: ['basic', 'cdn', 'configured', 'configurable', 'events', 'data'],
	calendar: ['basic', 'cdn', 'configured', 'configurable', 'events'],
	list: ['basic', 'cdn', 'configured', 'configurable', 'events', 'data'],
}
@Component({
  selector: 'app-toolbar',
	template: `<div #apptoolbar class='app-toolbar'></div>`,
})

export class AppToolbarComponent implements OnInit, OnDestroy {
	constructor(private router: Router) {}
  @ViewChild('apptoolbar', {static: true}) container: ElementRef;
	toolbar: Toolbar;
	
	@Input() aciveHeadersLinks: [];
	@Input() activeWidget?: string;
  @Output() activeExampleToEmmit = new EventEmitter<string>()

  ngOnInit() {
    this.toolbar = new Toolbar(this.container.nativeElement, {
      css: "dhx_widget--bordered",
      data: [
				{
					id: "title",
					type: "title",
				 	value: `Using DHTMLX widgets with Angular`
				},
				{
					id: "separ",
					type: "separator",
					hidden: true,
				},
				{
					id: "basic_link",
					value: "Basic init",
					group: "toolbarNav",
					active: false,
					twoSate: true,
					hidden: true,
				},
				{
					id: "cdn_link",
					value: "CDN init",
					group: "toolbarNav",
					twoSate: true,
					hidden: true,
				},
				{
					id: "configured_link",
					value: "Configured",
					group: "toolbarNav",
					twoSate: true,
					hidden: true,
				},
				{
					id: "configurable_link",
					value: "Configurable",
					group: "toolbarNav",
					twoSate: true,
					hidden: true,
				},
				{
					id: "events_link",
					value: "Events",
					group: "toolbarNav",
					twoSate: true,
					hidden: true,
				},
				{
					id: "data_link",
          value: "Data",
					group: "toolbarNav",
					twoSate: true,
					hidden: true,
				},
				{
					type: 'spacer',
				},
				{
					id: 'doc',
					type: 'customButton',
					html: '<span></span>',
					css: 'dock-button',
					hidden: false,
				},
				{
					id: 'trial',
					type: 'customButton',
					css: 'trial-button',
					html: '<span>Free trial</span>'
				}
			],
		});
		
		this.toolbar.events.on('click', id => {
			switch (id) {
				case 'doc': 
					if (this.activeWidget === 'pivot') {
						window.open('https://docs.dhtmlx.com/pivot/index.html', '_blank')
					} else {
						window.open('https://docs.dhtmlx.com/suite/' + this.activeWidget + '__index.html', '_blank')
					}
					break;
				case 'trial':
					if (this.activeWidget=== 'pivot') {
						window.open('https://dhtmlx.com/docs/products/dhtmlxPivot/download.shtml', '_blank')
					} else {
						window.open('https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml', '_blank')
					}
					break;
				case 'basic_link':
				case 'cdn_link':
				case 'configured_link':
				case 'configurable_link':
				case 'events_link':
				case 'data_link':
					this.router.navigate([window.location.pathname], {fragment: id.split('_')[0]})
					break;
				default:
					break;
			}
		})
		if(window.location.hash) {
			this.toolbar.data.update(window.location.hash.substring(1) + '_link', {active: true})
		}
	}
	ngOnChanges(changes: SimpleChanges) {
		const activeWidget: SimpleChange = changes.activeWidget;
		if (this.toolbar) {
			if (activeWidget.currentValue) {
				TOOOLBAR_LINKS.all.map((example, key) => {
					this.toolbar.data.update(example + '_link', {hidden: TOOOLBAR_LINKS[activeWidget.currentValue][key] !== example})
				}) 
				this.toolbar.data.update('doc', {html: `<span>DHX ${activeWidget.currentValue.charAt(0).toUpperCase() + activeWidget.currentValue.slice(1)} documentation</span>`})
				this.toolbar.data.update('title', {value: `Using DHTMLX ${activeWidget.currentValue.charAt(0).toUpperCase() + activeWidget.currentValue.slice(1) || 'widgets'} with Angular`})
				this.toolbar.data.update('separ', {hidden: false})
			} else {
				TOOOLBAR_LINKS.all.map((example, key) => {
					this.toolbar.data.update(example + '_link', {hidden: true})
				}) 
				this.toolbar.data.update('doc', {html: `<span><span>`})
				this.toolbar.data.update('title', {value: `Using DHTMLX widgets with Angular`})
				this.toolbar.data.update('separ', {hidden: true})
			}
		}
	}

  ngOnDestroy() {
    this.toolbar.destructor();
  }
}
