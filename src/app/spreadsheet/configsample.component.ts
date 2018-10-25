import { Component } from '@angular/core';

@Component({
  selector: 'app-config-sample',
  template: `
<div class='app-box'>
  <p>Pre-configured component</p>
  <app-spreadsheet-configured class='wide-size'></app-spreadsheet-configured>
</div>`
})
export class SpreadsheetConfigSampleComponent {
}
