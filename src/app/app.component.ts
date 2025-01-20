import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { UsersTasksComponent } from './component/users-tasks/users-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, UsersTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice';

  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get userSelected() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: any) {
    this.selectedUserId = id;
  }
}
