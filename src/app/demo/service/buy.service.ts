import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {eProdoct} from "../model/eprodoct";
import {Observable} from "rxjs";

@Injectable()
export class BuyService {
    constructor(private http: HttpClient, @Inject("url") private url: string) {
    }

    addShop(shopUser: any) {
        let status = this.http.post<any>(this.url + "buy/saveBuy/", shopUser).subscribe(data => {
            console.log(data)
        });

    }

    getAllShopById(id: number): Observable<any> {
        id = 1;
        return  this.http.get<any>(this.url + "shop/getAll/" + id);
    }

    deleteShopProduct(id:number):Observable<any>{

     return    this.http.delete<boolean>(this.url + "shop/delete/" + id);


    }
}
