import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-task',
  imports: [],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css'
})
export class AddNewTaskComponent {
@Output() cancel = new EventEmitter<any>();

onCancelBtn(){
  console.warn(this.cancel)
  this.cancel.emit()
}
}
