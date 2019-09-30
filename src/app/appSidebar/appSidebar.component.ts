import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild, Output, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from 'dhx-suite';

@Component({
  selector: 'app-sidebar',
  template: `<div #appsidebar class='app-sidebar' style="height: 100%"></div>`,
})
export class AppSidebarComponent implements OnInit, OnDestroy {
	constructor(private router: Router) {

	}
	
  @ViewChild('appsidebar', {static: true}) container: ElementRef;
	sidebar: Sidebar;

	
	@Input() activeWidget: string;
	@Output() activeWidgetToEmmit = new EventEmitter<string>()

  ngOnInit() {
    this.sidebar = new Sidebar(this.container.nativeElement, {
      css: "dhx_widget--bordered",
      data: [
				{
					id: "logo",
					type: 'customButton', 
					css: 'logo-button',
					// html: '<img src="/static/logo_r.svg" alt="DHTMLX - React"/>',
					group: "nav",
					twoState: true
				},
				{
					type: 'separator',
				},
				{
					value: 'Calendar',
					id: 'calendar-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'List',
					id: 'list-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Toolbar',
					id: 'toolbar-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Timepicker',
					id: 'timepicker-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Slider',
					id: 'slider-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Colorpicker',
					id: 'colorpicker-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Sidebar',
					id: 'sidebar-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Ribbon',
					id: 'ribbon-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Dataview',
					id: 'dataview-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Grid',
					id: 'grid-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Menu',
					id: 'menu-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Tabbar',
					id: 'tabbar-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Tree',
					id: 'tree-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Chart',
					id: 'chart-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Message',
					id: 'message-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Popup',
					id: 'popup-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Pivot',
					id: 'pivot-link',
					group: "nav",
					twoState: true
				},
				{
					value: 'Treegrid',
					id: 'treegrid-link',
					group: "nav",
					twoState: true
				},
			],
		});
		this.sidebar.events.on('click', id => {
			this.router.navigate(['/' + id.split('-')[0]])
		})
		this.sidebar.events.on('click', id => {
			this.router.navigate(['/' + id.split('-')[0]])
		})
  }
	ngOnChanges(changes: SimpleChanges) {
		const activeWidget: SimpleChange = changes.activeWidget;
		if (activeWidget.currentValue) {
			this.sidebar && this.sidebar.data.update(activeWidget.currentValue + '-link', {active: true})
		}
	}
  ngOnDestroy() {
    this.sidebar.destructor();
  }
}
