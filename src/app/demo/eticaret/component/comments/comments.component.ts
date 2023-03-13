import {
    Component, Input, OnInit
} from '@angular/core';

import {CommentService} from "../../../service/comment.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {DividerModule} from "primeng/divider";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {ToggleButtonModule} from "primeng/togglebutton";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {CheckboxModule} from "primeng/checkbox";
import {ProductComment} from "../../../model/comment";
import {eProdoct} from "../../../model/eprodoct";
import {User} from "../../../model/user";


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

export class CommentsComponent implements OnInit {


    @Input() comments!: any[];

    newCommet!: ProductComment;

    commentss: any[] = [];
    isLike!: boolean;

    yanitla: boolean = false;
    addComment: String = "";
    product!: eProdoct;
    userId!:number;


    constructor(private commentService: CommentService) {

        // @ts-ignore
        this.product = JSON.parse(localStorage.getItem("Product"));

        // @ts-ignore
        this.userId = JSON.parse(localStorage.getItem("UserId"));


    }

    ngOnInit(): void {
        this.commentss=this.comments;


    }

    commentOperations(comment: Comment) {
        console.log(comment);
    }


    commentsAdd(comment: any) {

        this.newCommet = {
            comment: this.addComment,
            parentID: comment.commentId,
            products: this.product,
            user: {
                userId:this.userId
            }
        }
        console.log(this.newCommet);
        this.commentService.saveComment(this.newCommet);

    }
}







