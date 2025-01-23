import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
  output
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';
import { User } from '../../models/user';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user! : User;
  @Input({ required: true }) activeUser! : boolean;
  @Output() select = new EventEmitter();
  // select = output<string>()

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id)
  }
}
