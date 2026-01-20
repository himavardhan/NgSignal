import { Injectable , signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDetails {
  //define signal to hold the shared data
  private readonly userName = signal<string>('Guest');
  private readonly userEmail = signal<string>('');
  private readonly isLoggedIn = signal<boolean>(false);
  private  readonly userRole = signal<string>('Admin');

  //getter and setter methods for each signal
  getUserName(): string {
    return this.userName();
  }
  setUserName(name: string): void {
    this.userName.set(name);
  }
  getUserEmail(): string {
    return this.userEmail();
  }
  setUserEmail(email:string):void{
    this.userEmail.set(email);
  }
  getIsLoggedIn(): boolean {
    return this.isLoggedIn();
  }
  setIsLoggedIn(status: boolean): void {
    this.isLoggedIn.set(status);
  }
  getUserRole(): string {
    return this.userRole();
  }
  setUserRole(role: string): void {
    this.userRole.set(role);
  }

}
