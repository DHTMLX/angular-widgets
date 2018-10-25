import { Component } from '@angular/core';
import { DataCollection, DataEvents } from 'dhx-vault';

@Component({
  selector: 'app-data-sample',
  template: `
<div class='app-box'>
  <p>Data-bound vault</p>
  <app-vault [data]=files class='base-size'></app-vault>
  <hr>
  <div class='line'>
    <input type="button" (click)="add()" value="Add a file">
    <input type="button" (click)="clear()" value="Clear all">
  </div>
  <div class='line'>
    {{count}} files added
  </div>
</div>`
})
export class DataSampleComponent {
  files: DataCollection;
  count: number;

  constructor() {
    this.files = new DataCollection();
    this.files.events.on(DataEvents.change, () => {
      this.count = this.files.getLength();
    });
  }
  add() {
    this.files.add({ name: 'myfile.png', size: 24560 });
  }
  clear() {
    this.files.removeAll();
  }
}
