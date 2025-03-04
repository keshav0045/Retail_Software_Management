import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showRegisterForm = signal<boolean>(false);


  changeView() {
    // Change view from login to register
    this.showRegisterForm.set(!this.showRegisterForm())
  }

}
