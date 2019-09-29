import { Component, ElementRef, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';

import { List } from 'dhx-suite';

@Component({
  selector: 'list-child',
  template: `<div #widget class='widget-box-wide'></div>`
})

export class ListChild implements OnInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  list: List;

  @Input() css: string;
  @Input() template: void;
  @Input() height: number | string;
  @Input() itemHeight: number | string;

  ngOnInit() {
    this.list = new List(this.container.nativeElement, {
      css: this.css,
      template: this.template, 
      height: this.height,
      itemHeight: this.itemHeight,
    });
    this.list.data.load('assets/static/dataview.json')
  }

  ngOnDestroy() {
    this.list.destructor();
  }
}
