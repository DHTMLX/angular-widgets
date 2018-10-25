import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-sample',
  template: `
<div class='app-box'>
  <p>Pre-configured component</p>
  <app-vault-configured class='base-size'></app-vault-configured>
</div>`
})
export class ConfigSampleComponent {
}
