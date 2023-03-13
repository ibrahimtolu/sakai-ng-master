import {eProdoct} from "./eprodoct";
import {User} from "./user";

export interface ProductComment{
    commentId?:number;
    comment?:String;
    parentID?:number;
    user?:User;

    products?:eProdoct;
    likeAmount?:number;



}
