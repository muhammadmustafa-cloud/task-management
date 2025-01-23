import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddNewTaskComponent } from "./add-new-task/add-new-task.component";

@Component({
  selector: 'app-users-tasks',
  imports: [TaskComponent, AddNewTaskComponent],
  templateUrl: './users-tasks.component.html',
  styleUrl: './users-tasks.component.css',
})
export class UsersTasksComponent {
  // @Output() name = new EventEmitter()
  @Input({ required: true }) id?: string;
  @Input({ required: true }) name?: string;
  addTask = false;

  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks() {
    return this.dummyTasks.filter((task) => task.userId === this.id);
  }

  onCompleteTask(id: string) {
    console.log('cheeeee', id);
    this.dummyTasks = this.dummyTasks.filter((task) => {
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
}
