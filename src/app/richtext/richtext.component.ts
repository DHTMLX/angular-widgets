import { Component, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Richtext } from 'dhx-richtext';

@Component({
  selector: 'app-richtext',
  template: `<div #widget class='widget-box'></div>`
})
export class RichtextComponent implements OnInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  richtext: Richtext;

  @Input() mode: 'document' | 'classic' = 'classic';
  @Input() value: string;
  @Input() dataType: 'html' | 'markdown';

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.richtext = new Richtext(this.container.nativeElement, {
      mode: this.mode
    });

    if (this.value) {
        this.richtext.setValue(this.value, this.dataType);
    }

    this.richtext.events.on('change', () => {
        this.change.emit(this.richtext.getValue(this.dataType));
    });
  }

  ngOnDestroy() {
      this.richtext.destructor();
  }
}
