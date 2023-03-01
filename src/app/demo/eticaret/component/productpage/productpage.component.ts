import {
    Component, ContentChild, Input, OnInit
} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService, TreeNode} from "primeng/api";
import {eProdoct} from "../../../model/eprodoct";
import {EproductsService} from "../../../service/eproducts.service";
import {Store} from "@ngrx/store";
import {shopDecrement} from "../../../../../store/shop/shop.actions";
import {ShopService} from "../../../service/shop.service";
import {BuyService} from "../../../service/buy.service";
import {NodeService} from "../../../service/node.service";
import {CommentService} from "../../../service/comment.service";
import {CommentsComponent} from "../comments/comments.component";
import {Comment} from "../../../model/comment";


@Component({
    selector: 'app-productpage',
    templateUrl: './productpage.component.html',
    styleUrls: ['./product.component.scss'],

})

export class ProductpageComponent implements OnInit{

    product!: eProdoct;
    files!: TreeNode[];
    comments: Comment[]=[];
    comments2 : Comment[]=[];
    commentss:any[]=[];

    cols!: any[];

    products: eProdoct[] = [];
    postComments!: CommentsComponent;

    constructor(private nodeService: NodeService, private commentService: CommentService) {


        // @ts-ignore
        this.product = JSON.parse(localStorage.getItem("Product"));
        this.products.push(this.product);
    }



    ngOnInit() {
        this.listDBTest();


    }

    shop() {

    }

    listTest(){


        let list=this.comments;
        let  recursivefunc2 = (list:any[], id = 0) => {
            let array: any[] = [];
            list.forEach((element: {
                parent_id: number;
                id: number | undefined;
                children: any[];
            }) => {
                if (element.parent_id === id) {
                    let children = recursivefunc2(list, element.id);

                    if (children.length) {
                        element.children = children;
                    } else {
                        element.children = [];
                    }
                    array.push(element);
                }
            })
            return array;
        }
        this.commentss=recursivefunc2(list);
    }
    listDBTest(){

        this.comments2 = [
            {id: 1, "userName": "admin", parentID: 0, "comments": "İyi mal"},
            {id: 2, "userName": "user", parentID: 1, "comments": "hayır degil"}
        ];


        let list=this.comments2;

        let  recursivefunc2 = (list:any[], id = 0) => {
            let array: any[] = [];
            list.forEach((element:any) => {
                console.log("value pid",element.parentID,"id",element.id);
                console.log("type pid",typeof element.parentID,"type id", typeof element.id);

                if (element.parentID === id) {
                    let children = recursivefunc2(list, element.id);

                    if (children.length) {
                        element.children = children;
                    } else {
                        element.children = [];
                    }
                    array.push(element);
                }
            })
            return array;
        }
        this.commentss=recursivefunc2(list);

        console.log("dblist",this.commentss);



    }


}






