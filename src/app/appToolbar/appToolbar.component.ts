import { Component, ElementRef, Input, OnInit, Output, EventEmitter, OnDestroy, ViewChild, SimpleChanges, SimpleChange } from '@angular/core';
import { Toolbar } from 'dhx-suite';

@Component({
  selector: 'app-toolbar',
	template: `<div #apptoolbar class='app-toolbar'></div>`,
})

export class AppToolbarComponent implements OnInit, OnDestroy {
  @ViewChild('apptoolbar', {static: true}) container: ElementRef;
	toolbar: Toolbar;
	
	@Input() aciveHeadersLinks: [];
	@Input() activeSidebarLink?: string;
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
				},
				{
					id: "basic_link",
					value: "Basic init",
					group: "toolbarNav",
					active: true,
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
					id: "props_link",
					value: "Using props",
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
          type: "button",
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
		this.setToolbarActiveItems()
		
		this.toolbar.events.on('click', id => {
			switch (id) {
				case 'doc': 
					if (this.activeSidebarLink === 'pivot') {
						window.open('https://docs.dhtmlx.com/pivot/index.html', '_blank')
					} else {
						window.open('https://docs.dhtmlx.com/suite/' + this.activeSidebarLink + '__index.html', '_blank')
					}
					break;
				case 'trial':
					if (this.activeSidebarLink=== 'pivot') {
						window.open('https://dhtmlx.com/docs/products/dhtmlxPivot/download.shtml', '_blank')
					} else {
						window.open('https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml', '_blank')
					}
					break;
				case 'basic_link':
				case 'cdn_link':
				case 'configured_link':
				case 'props_link':
				case 'events_link':
				case 'data_link':
					this.toolbar.data.update(id, {active: true})
					this.activeExampleToEmmit.emit(id)
					break;
				default:
					break;
			}
		})
		if(window.location.hash) {
			this.toolbar.data.update(window.location.hash.substring(1) + '_link', {active: true})
			window.location.hash !== '#basic' && this.toolbar.data.update('basic_link', {active: false})
		}
	}
	ngOnChanges(changes: SimpleChanges) {
		const activeSidebarLink: SimpleChange = changes.activeSidebarLink;
		if (activeSidebarLink.previousValue !== activeSidebarLink.currentValue) {
		  this.toolbar && this.setToolbarActiveItems()
		}
		this.toolbar && this.aciveHeadersLinks[this.activeSidebarLink].map(item => {
			this.toolbar.data.update(item + "_link", {active: false})
		})
	}

	setToolbarActiveItems() {
		this.activeSidebarLink && this.toolbar.data.update('title', {value: `Using DHTMLX ${this.activeSidebarLink.charAt(0).toUpperCase() + this.activeSidebarLink.slice(1) || 'widgets'} with Angular`})
		this.activeSidebarLink && this.toolbar.data.update('doc', {html: `<span>DHX ${this.activeSidebarLink.charAt(0).toUpperCase() + this.activeSidebarLink.slice(1)} documentation</span>`})
		this.aciveHeadersLinks && this.activeSidebarLink && this.aciveHeadersLinks[this.activeSidebarLink].map(item => {
			this.toolbar.data.update(item + "_link", {hidden: false})
		})
	}
  ngOnDestroy() {
    this.toolbar.destructor();
  }
}
