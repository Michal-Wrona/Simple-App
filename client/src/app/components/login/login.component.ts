import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any={};

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  // login() {
  //   this.userService.login(this.model).subscribe({
  //     next: response => {
  //      this.router.navigateByUrl('/aaa');
  //     },
  //   })
  // }

  login() {
    this.userService.login(this.model).subscribe();
  }

  logout() {
    this.userService.logout();
  }
  

}
