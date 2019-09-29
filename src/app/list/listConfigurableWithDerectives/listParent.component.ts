import { Component } from '@angular/core';

@Component({
  selector: 'list-parent',
  template: `<list-child 
    [css]="'dhx_widget--bordered'"
    [template]=this.template
    [height]=300
    [itemHeight]=70
    class='widget-box-wide'></list-child>`
})

export class ListParent {
  template = item => `<div style="height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;"><strong>${item.title}</strong> <span>${item.short}</span></div>`
}