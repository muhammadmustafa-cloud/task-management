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

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();
  // select = output<string>()

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.id)
  }
}
