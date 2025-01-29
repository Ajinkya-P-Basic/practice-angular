import { Injectable } from '@angular/core';
import { userDetails } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setLoginUserDetails(userDetails: userDetails){
    if (typeof window !== 'undefined') {
      localStorage.setItem('userDetails', JSON.stringify(userDetails))
    }
  }

  getLoginUserDetails(){
    if (typeof window !== 'undefined') {
      return localStorage.getItem('userDetails');
    }
    return null;
  }

}
