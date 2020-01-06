import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message: string;
  public errorClass: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  authenticated(): boolean {
    return false;
  }
 
  login() {
    // service to login
    console.log('this should call login backend');
  }

  logout() {
    // service to logout
    console.log('this should call logout backend');
  }

  account() {
    // service to return account object
    console.log('this should call getAccount backend');
  }

  request(endpoint: string) {
    
  }

  private handleResponse(res: Response, comp: AppComponent) {
    
  }

  private handleServiceError(error: Response, comp: AppComponent) {
  }
}
