import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Richtext } from 'dhx-richtext';

@Component({
  selector: 'app-richtext-configured',
  template: `<div #widget class='widget-box-wide'></div>`
})
export class RichtextConfiguredComponent implements OnInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  richtext: Richtext;

  ngOnInit() {
    this.richtext = new Richtext(this.container.nativeElement, {
      toolbarBlocks: ['default', 'clear', 'fullscreen']
    });

  }

  ngOnDestroy() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  }
}
