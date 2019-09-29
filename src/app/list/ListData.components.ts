import { Component, ElementRef, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

import { List } from 'dhx-suite';

@Component({
  selector: 'list-data',
	template: `<div>
		<div #widget class='widget-box-wide'></div>
		<div style="display: flex; justify-content: center; padding: 20px" >
			<button class="button" (click)="handleClick()">Remove first item from {{buttonText}} items</button>
			<button class="button" (click)="handleReload()">Reload data</button>
		</div>
	`
})

export class ListDataComponent implements OnInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  list: List;
	@Input() buttonText: any;
	
  ngOnInit() {
    this.list = new List(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`, 
      height: 300
		});
		this.list.data.load('assets/static/dataview.json')

		this.list.data.events.on('load', () => {
			this.handleCahnge(this.list.data.getLength())
		})
		this.list.data.events.on('change', () => {
			this.handleCahnge(this.list.data.getLength())
		})
	}

	handleCahnge(dataLength) {
		this.buttonText = dataLength
	}
	handleReload() {
		this.list.data.load('assets/static/dataview.json')
	}
	handleClick() {
		if (this.buttonText === "Reload data") {
		} else {
			this.list.data.remove(this.list.data.getId(0))
		}
	}
  ngOnDestroy() {
    this.list.destructor();
  }
}
