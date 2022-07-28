import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isUserLoggedIn: boolean = false;
  constructor() { }
 
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
    this.isUserLoggedIn=true;
    }
  
    public getData(key: string) {
      return localStorage.getItem(key)
    }
    public removeData(key: string) {
      localStorage.removeItem(key);
    }
  
    public clearData() {
      localStorage.clear();
    }

   
  
}


