import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserLogin } from 'src/app/models/userLogin';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  @Input() user: User;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  setCurrentUser() {
    const user: UserLogin = JSON.parse(localStorage.getItem('user'));
    this.userService.setCurrentUser(user);
  }

}
