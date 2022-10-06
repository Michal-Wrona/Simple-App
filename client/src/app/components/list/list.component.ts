import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserLogin } from 'src/app/models/userLogin';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user: User;
  username:string = 'Adam'
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  getUser(username) {
    this.userService.getUser(username).subscribe({
      next: user => {
        this.user = user 
      }
    })
  }


  getUsers() { 
    this.userService.getUsers().subscribe({
      next: users => {
        this.users = users
      }
    })
  }

  setCurrentUser() {
    const user: UserLogin = JSON.parse(localStorage.getItem('user'));
    this.userService.setCurrentUser(user);
  }

}
