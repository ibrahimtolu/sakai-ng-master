import {
    Component
} from '@angular/core';

import {MessageService} from "primeng/api";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";
import {User} from "../../../model/user";
import {LoginControlService} from "../../../service/loginControl.service";


@Component({
    selector: 'app-loginpage',
    templateUrl: './loginpage.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService]

})

export class LoginComponent {


    user!: User;
    userPassword!: String;
    userName!:String;



    constructor(private router: Router, private loginService: LoginControlService,private messageService:MessageService) {

    }

    login() {


    }

    loginControl() {
        this.user={
            userId:0,
            userName:this.userName,
            userPassword:this.userPassword,
            active:true,
            userType:{
                userTypeId:1,
                userTypeName:"user"
            }
        }

        this.loginService.loginControl(this.user).subscribe((data)=>{
            localStorage.setItem("User",JSON.stringify(data));
            if(data.userTypeId==1)
                this.router.navigate(["eticaretdashboard"])
            else if(data.userTypeId==2)
                this.router.navigate(['admin']);
            else
                this.messageService.add({ detail: 'HATA', life: 3000});

        });


    }


}







