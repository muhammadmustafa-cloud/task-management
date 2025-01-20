import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users-tasks',
  imports: [],
  templateUrl: './users-tasks.component.html',
  styleUrl: './users-tasks.component.css'
})
export class UsersTasksComponent {
// @Output() name = new EventEmitter()
@Input() name?: string;
}
