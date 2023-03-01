import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {eProdoct} from "../model/eprodoct";
import {Observable} from "rxjs";

@Injectable()
export class ShopService {
    constructor(private http: HttpClient, @Inject("url") private url: string) {
    }

    addShop(product: eProdoct) {
        let status = this.http.post<any>(this.url + "shop/save/", product).subscribe(data => {
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
