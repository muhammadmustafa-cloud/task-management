import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { UsersTasksComponent } from './component/users-tasks/users-tasks.component';
import { CommonModule } from '@angular/common';
import { AddNewTaskComponent } from "./component/users-tasks/add-new-task/add-new-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, UsersTasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice';

  users = DUMMY_USERS;
  selectedUserId!: string;

  get userSelected() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: any) {
    this.selectedUserId = id;
  }
}
