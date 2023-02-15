import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {TreeNode} from "primeng/api";
import {eProdoct} from "../model/eprodoct";

@Injectable()
export class EproductsService {

    constructor(private http: HttpClient) { }

    geteProducts() {
        return this.http.get<any>('assets/demo/data/eproducts.json')
            .toPromise()
            .then(res => <eProdoct[]> res.data)
            .then(data => data);
    }

}
