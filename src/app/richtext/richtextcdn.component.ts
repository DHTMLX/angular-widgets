import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import fromCDN from 'from-cdn';

declare var dhx;

@Component({
  selector: 'app-richtext-cdn',
  template: `<div #widget class='widget-box-wide'></div>`
})
export class RichtextCDNComponent implements OnDestroy {
  @ViewChild('widget') container: ElementRef;
  richtext: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/richtext/3.0/richtext.js',
      'https://cdn.dhtmlx.com/richtext/3.0/richtext.css'
    ]).then(() => {
      this.richtext = new dhx.Richtext(this.container.nativeElement);

      this.ready.emit({ richtext: this.richtext });
    });
  }

  ngOnDestroy() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  }
}
