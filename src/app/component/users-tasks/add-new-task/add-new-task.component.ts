import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../../../models/task';

@Component({
  selector: 'app-add-new-task',
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css'
})
export class AddNewTaskComponent {
@Output() cancel = new EventEmitter<any>();
@Output() add = new EventEmitter<newTaskData>()
enteredTitle = '';
enteredSummary = '';
enteredDate = '';

onCancelBtn(){
  console.warn(this.cancel)
  this.cancel.emit()
}

onSubmit(){
this.add.emit({
  title: this.enteredTitle,
  summary: this.enteredSummary,
  date: this.enteredDate,
})
}
}
