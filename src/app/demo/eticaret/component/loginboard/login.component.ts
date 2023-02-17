import {
    Component
} from '@angular/core';

import {MessageService} from "primeng/api";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";
import {EproductsService} from "../../../service/eproducts.service";
import {UserService} from "../../../service/user.service";


@Component({
    selector: 'app-loginpage',
    templateUrl: './loginpage.component.html',
    styleUrls:['./login.component.scss'],
    providers: [MessageService]

})

export class LoginComponent   {
  password!:string;
  userName!:string;



    constructor(private router: Router ){

        localStorage.setItem("userName","user");
        localStorage.setItem("userPassword","user");

        localStorage.setItem("adminName","admin");
        localStorage.setItem("adminPassword","admin");



    }

  login(){

      if(localStorage.getItem("adminName")==this.userName && localStorage.getItem("adminPassword")==this.password){
          this.router.navigate(["admin"]);
      }else if(localStorage.getItem("userName")==this.userName && localStorage.getItem("userPassword")==this.password){
          this.router.navigate(["eticaretdashboard"]);
      }else {
          alert("Worg user name or Password");
      }

  }





}







