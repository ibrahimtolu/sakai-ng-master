import {eProdoct} from "./eprodoct";
import {User} from "./user";

export interface ShopUser{
    shopUserId?:number;
    product:eProdoct;
    user:User;
    shopAmount?:number;

}
