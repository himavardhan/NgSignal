
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

  constructor(private route:Router) { }

  OpenDashboard() {
    console.log('Login button clicked', this.username(), this.password);
    this.route.navigate(['/dashboard']);
  }

  OpenSignUpPage(){
    console.log('Sign Up button clicked');
    this.route.navigate(['/openBillSignUp']);
  }

}
