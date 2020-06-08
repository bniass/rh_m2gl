import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  data: any;

  constructor(private loginService : LoginService) { 
    this.data = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    
  }

  logon(){
    //console.log(this.data);
    this.loginService.loginRequest(this.data)
    .subscribe(res => {
      console.log(res);
      this.loginService.saveToken(res.body);
    },
    err => {
      console.log(err);
    });
  }

}
