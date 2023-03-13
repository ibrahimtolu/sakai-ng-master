import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {eProdoct} from "../model/eprodoct";
import {Observable} from "rxjs";
import {ShopUser} from "../model/ShopUser";

@Injectable()
export class ShopService {
    constructor(private http: HttpClient, @Inject("url") private url: string) {
    }

    addShop(shopUser:ShopUser) {
        let status = this.http.post<any>(this.url + "shop/save/", shopUser).subscribe(data => {
            console.log(data)
        });

    }
    putShopUser(shopUser:ShopUser) {
        console.log("shopPut",shopUser);
        let status = this.http.put<any>(this.url + "shop/save/shopuser", shopUser).subscribe(data => {
            console.log("put",data)
        });

    }

    addShopUser(product: any) {
        let status = this.http.post<any>(this.url + "shop/save/shopuser", product).subscribe(data => {
            console.log(data)
        });

    }

    getAllShopById(id: number): Observable<any> {
        return this.http.get<any>(this.url + "shop/getAll/" + id);
    }

    deleteShopProduct(id: number): Observable<any> {
        return this.http.delete<boolean>(this.url + "shop/delete/" + id);
    }

    updateAmountByShopId(shopUser: any) {
        this.http.post(this.url + "shop/amount", shopUser);
    }
}
