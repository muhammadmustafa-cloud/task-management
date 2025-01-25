import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../models/task';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required: true}) task!: Task;
@Output() complete = new EventEmitter<string>();

onCompleteTask(){
  console.warn("heeeeee",this.task.id)
  this.complete.emit(this.task.id)
}
}
