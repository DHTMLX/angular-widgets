import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from 'dhx-suite';

@Component({
  selector: 'app-sidebar',
  template: `<div #appsidebar class='app-sidebar' style="height: 100%"></div>`,
})
export class AppSidebarComponent implements OnInit, OnDestroy {
	constructor(private router: Router) {}
	
  @ViewChild('appsidebar', {static: true}) container: ElementRef;
	sidebar: Sidebar;
	
	@Input() activeSidebarLink?: string;
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
			],
		});
		
		this.activeSidebarLink && this.sidebar.data.update(this.activeSidebarLink + "-link", {active: true})
		this.sidebar.events.on('click', id => {
			this.router.navigate(['/' + id.split('-')[0]])
			this.activeWidgetToEmmit.emit(id)
		})
  }

  ngOnDestroy() {
    this.sidebar.destructor();
  }
}
