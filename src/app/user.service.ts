import { Injectable } from '@angular/core';
import { userDetails } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setLoginUserDetails(userDetails: userDetails){
    localStorage.setItem('userDetails', JSON.stringify(userDetails))
  }

  getLoginUserDetails(){
    return localStorage.getItem('userDetails');
  }

}
