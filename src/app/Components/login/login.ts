import { UserDetails } from './../../services/user-details';
import { Component, signal } from '@angular/core';
import { SharedModule } from '../../SharedModules/SharedModule';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true
})
export class Login {

  title = signal('Open Bills');
  username = signal('');
  password = '';

  constructor(private route:Router,private userDetails:UserDetails) { }

  OpenDashboard() {
    console.log('Login button clicked', this.username(), this.password);
    this.userDetails.setUserName(this.username());
    this.userDetails.setIsLoggedIn(true);
    this.route.navigate(['/dashboard']);
  }

  OpenSignUpPage(){
    this.userDetails.setIsLoggedIn(false);
    console.log('Sign Up button clicked');
    this.route.navigate(['/openBillSignUp']);
  }

}
