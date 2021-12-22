import { Component } from '@angular/core';

@Component ({
  selector: 'app-warning-alert',
  template: `
    <p>This is a warning, you are in danger!!!</p>`,

    styles: [

      `p {
        padding: 20px;
        background-color: magenta;
        border: 1px solid blueviolet;
      }
    `
      ]
})
export class WarningAlertComponent {


}
