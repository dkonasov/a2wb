import { Component } from '@angular/core';

@Component({
  selector: 'root-component',
  template: `<h1>Hello {{name}}</h1>`,
})
export class RootComponent  { name = 'Angular'; }
