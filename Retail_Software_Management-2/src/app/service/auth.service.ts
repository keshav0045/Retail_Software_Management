import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseService: FirebaseService) {}

  // ✅ 1. Login Method
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.firebaseService.auth, email, password);
  }

  // ✅ 2. Logout Method
  logout() {
    return signOut(this.firebaseService.auth);
  }

  // ✅ 3. Signup (Register) Method
  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.firebaseService.auth, email, password);
  }

  // ✅ 4. Check if User is Logged In (Auth State)
  getCurrentUser(): Promise<User | null> {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.firebaseService.auth, (user) => {
        resolve(user); // Returns user if logged in, else null
      }, reject);
    });
  }

  // ✅ 5. Reset Password (Forgot Password)
  resetPassword(email: string) {
    return sendPasswordResetEmail(this.firebaseService.auth, email);
  }
}
