import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
    IsLoggedIn(){
      return localStorage.getItem("user");
    }
    adminAuth(){
      if(localStorage.getItem("usertype")=="admin")
          return true;

      return false;

  }
    userAuth(){
        if(localStorage.getItem("usertype")=="user")
            return true;

        return false;

    }
}
