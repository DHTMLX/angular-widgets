import { Component } from '@angular/core';

@Component({
  selector: 'app-config-sample',
  template: `
<div class='app-box'>
  <p>Pre-configured richtext with full toolbar</p>
  <app-richtext-configured class='wide-size'></app-richtext-configured>
</div>`
})
export class RichtextConfigSampleComponent {}
