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
import {J} from "@angular/cdk/keycodes";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {DividerModule} from "primeng/divider";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {ToggleButtonModule} from "primeng/togglebutton";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {CheckboxModule} from "primeng/checkbox";


@Component({
    selector: 'app-comments',
    templateUrl: './comment.component.html',
    imports: [
        AsyncPipe,
        NgIf,
        NgForOf,
        DividerModule,
        RatingModule,
        FormsModule,
        ToggleButtonModule,
        ButtonModule,
        InputTextModule,
        RippleModule,
        CheckboxModule
    ],
    standalone: true


})

export class CommentsComponent implements OnInit  {


    @Input()comments!:any[];
    @Input()comments2!:any;

    commentss:any[]=[];
    isLike!: boolean;
    user: string="user";
    yanitla:boolean=false;



    constructor( private commentService:CommentService) {

    }

    ngOnInit(): void {
        this.commentss=this.comments;
    }

    commentOperations(comment: Comment) {
        console.log(comment);
    }

    yanitlaMetot() {
        console.log("asdasd")
        this.yanitla=!this.yanitla;
    }
}







