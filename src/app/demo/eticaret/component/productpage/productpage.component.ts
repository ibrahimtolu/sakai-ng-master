import {
    Component, ContentChild, Input, OnInit
} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService, TreeNode} from "primeng/api";
import {eProdoct} from "../../../model/eprodoct";

import {NodeService} from "../../../service/node.service";
import {CommentService} from "../../../service/comment.service";
import {ProductComment} from "../../../model/comment";


@Component({
    selector: 'app-productpage',
    templateUrl: './productpage.component.html',
    styleUrls: ['./product.component.scss'],

})

export class ProductpageComponent implements OnInit {

    product!: eProdoct;
    files!: TreeNode[];
    userId:number;

    @Input()
    testList!: any[];

    newCommet!: ProductComment;

    addComment: string = '';
    comments: any[] = [];
    comments2: any[] = [];

    commentss: any[] = [];

    cols!: any[];

    products: eProdoct[] = [];

    constructor(private nodeService: NodeService, private commentService: CommentService) {
        // @ts-ignore
        this.product = JSON.parse(localStorage.getItem("Product"));
        this.products.push(this.product);


        // @ts-ignore
        this.userId = JSON.parse(localStorage.getItem("UserId"));
    }

    ngOnInit() {
        this.commentService.getAllCommentByProductId(this.product.id).subscribe((data) => {
                this.listDBTest1(data);
            }
        );


    }

    shop() {

    }


    // listDBTest() {
    //
    //     this.comments2 = [{
    //         "comment": "asdfasd",
    //         "userName": "user",
    //         "parentID": 2,
    //         "userId": "1",
    //         "commentId": 3
    //     }, {
    //         "comment": "Boş yapma",
    //         "userName": "user",
    //         "parentID": 3,
    //         "userId": "1",
    //         "commentId": 12
    //     }, {
    //         "comment": "Bu olmadı",
    //         "userName": "admin",
    //         "parentID": 0,
    //         "userId": "2",
    //         "commentId": 1
    //     }, {"comment": "ssss", "userName": "admin", "parentID": 1, "userId": "2", "commentId": 2}]
    //
    //     let list = this.comments2;
    //
    //     let recursivefunc2 = (list: any[], commentId = 0) => {
    //         let array: any[] = [];
    //         list.forEach((element: any) => {
    //
    //
    //             if (element.parentID === commentId) {
    //                 let children = recursivefunc2(list, element.commentId);
    //
    //                 if (children.length) {
    //                     element.children = children;
    //                 } else {
    //                     element.children = [];
    //                 }
    //                 array.push(element);
    //             }
    //         })
    //         return array;
    //     }
    //
    //     this.commentss = recursivefunc2(list);
    //
    //
    // }


    listDBTest1(relist: any[]) {


        let list = relist;
        console.log("relist",relist);

        let recursivefunc2 = (list: any[], commentId = 0) => {
            let array: any[] = [];
            list.forEach((element: any) => {


                if (element.parentID === commentId) {
                    let children = recursivefunc2(list, element.commentId);

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

        this.commentss = recursivefunc2(list);
        console.log("com",this.commentss);


    }


    commentsAdd() {


        this.newCommet = {
            comment: this.addComment,
            parentID: 0,
            products: this.product,
            user: {
                userId: this.userId
            }
        }
        console.log(this.newCommet);
        this.commentService.saveComment(this.newCommet);

    }
}






