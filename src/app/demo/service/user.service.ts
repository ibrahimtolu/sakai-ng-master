import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {TreeNode} from "primeng/api";

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<any>('assets/demo/data/user.json')
            .toPromise()
            .then(res => <User[]> res.data)
            .then(data => data);
    }
    getTreeItem() {
        return this.http.get<any>('assets/demo/data/user.json')
            .toPromise()
            .then(res => <User[]> res.data)
            .then(data => data);
    }
    getFiles() {
        return this.http.get<any>('assets/demo/data/files.json')
            .toPromise()
            .then(res => <TreeNode[]> res.data)
            .then(res=>res);

    }
}
