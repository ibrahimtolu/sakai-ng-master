import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {eProdoct} from "../model/eprodoct";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Injectable()
export class LoginControlService {
    constructor(private http: HttpClient, @Inject("url") private url: string) {
    }



    loginControl(user:User){


     return    this.http.post<any>(this.url + "login/" , user);
    }

}
