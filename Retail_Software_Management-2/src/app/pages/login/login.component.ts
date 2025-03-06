import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showRegisterForm = signal<boolean>(false);
 


  changeView() {
    // Change view from login to register
    this.showRegisterForm.set(!this.showRegisterForm())
  }

  credentials = { email: '', password: '' };

  // Hardcoded user credentials
  validUser = { email: 'admin@mail.com', password: 'admin123' };

  constructor(private router: Router) {}

  login() {
    if (
      this.credentials.email === this.validUser.email &&
      this.credentials.password === this.validUser.password
    ) {
      localStorage.setItem('user', JSON.stringify(this.validUser));
      alert('Login successful!');
      this.router.navigate(['/dashboard']); // Redirect after login
    } else {
      alert('Invalid Credentials');
    }
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }


}
