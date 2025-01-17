import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { UserComponent } from "./component/user/user.component";
import { DUMMY_USERS } from './dummy-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';

  users = DUMMY_USERS;

  onSelectedUser(id: any){
console.warn("selected user", id)
  }
}
