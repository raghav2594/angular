import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() name: string = '';

  @Output() nameChange = new EventEmitter<string>();
  
  changeName() {
    this.nameChange.emit('Nithya');
  }
}
