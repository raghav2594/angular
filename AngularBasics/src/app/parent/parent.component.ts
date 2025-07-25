import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  template: `<app-child [name] = '"Raghav"'></app-child>`,
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
