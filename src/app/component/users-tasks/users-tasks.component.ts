import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddNewTaskComponent } from "./add-new-task/add-new-task.component";
import { newTaskData } from '../../models/task';

@Component({
  selector: 'app-users-tasks',
  imports: [TaskComponent, AddNewTaskComponent],
  templateUrl: './users-tasks.component.html',
  styleUrl: './users-tasks.component.css',
})
export class UsersTasksComponent {
  // @Output() name = new EventEmitter()
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  addTask = false;

  get selectedUserTasks() {
    return this.dummyTasks.filter((task) => task.userId === this.id);
  }

  onCompleteTask(id: string) {
    console.log('cheeeee', id);
    dummyTasks = this.dummyTasks.filter((task) => {
      console.log("task id -> ", task.id)
      console.log("user id -> ", id)
      console.log("condition running : ",task.id !== id);
      return task.id !== id;
    });
  }

  addNewTask(){
    this.addTask = true
  }

  onCancelModel(){
    this.addTask = false
  }

  onAddTask(taskData: newTaskData){
    this.dummyTasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })
    this.addTask = false;
  }
}
