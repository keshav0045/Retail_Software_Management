import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth'; // ✅ Correct import

const firebaseConfig = {
  apiKey: "AIzaSyC8wFj_TUzGZksNJ-Xs8FBncDRuMVgxfJ4",
  authDomain: "retail-software-management.firebaseapp.com",
  projectId: "retail-software-management",
  storageBucket: "retail-software-management.firebasestorage.app",
  messagingSenderId: "44896538337",
  appId: "1:44896538337:web:a1a730a8132bbf5a97f1a0",
  measurementId: "G-ETLYNVM1ZY"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private _app: FirebaseApp = initializeApp(firebaseConfig);
  get app() {
    return this._app;
  }

  private _auth: Auth = getAuth(this._app); // ✅ Corrected: No function override
  get auth() { 
    return this._auth; 
  }

  private _db = getFirestore(this._app);
  get db() {
    return this._db;
  }

  constructor() { }
}
