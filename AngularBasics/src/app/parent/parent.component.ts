import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  template: `<app-child [name] = '"Raghav"' (nameChange) = receiveUpdatedName($event)></app-child>
            {{changeName}}`,
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  changeName: string = '';
receiveUpdatedName(name: string) {
    console.log(`Received updated name from child: ${name}`);
    this.changeName = name;
  }
}
