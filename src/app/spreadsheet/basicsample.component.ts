import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-sample',
  template: `
<div class='app-box'>
  <p>Basic spreadsheet</p>
  <app-spreadsheet class='wide-size'></app-spreadsheet>

  <hr>
  <p>Spreadsheet with menu</p>
  <app-spreadsheet [menu]='true' class='wide-size'></app-spreadsheet>

  <hr>
  <p>Minimal layout</p>
  <app-spreadsheet [editLine]='false' class='wide-size'></app-spreadsheet>

</div>`
})
export class SpreadsheetBasicSampleComponent {
}
