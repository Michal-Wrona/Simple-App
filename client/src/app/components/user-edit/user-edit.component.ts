import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  form: NgForm;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(this.route.snapshot.paramMap.get('username')).subscribe({
      next: user => this.user = user
    })
  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe();
  }

}
