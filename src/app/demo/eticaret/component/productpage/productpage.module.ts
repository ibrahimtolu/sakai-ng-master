import { NgModule } from '@angular/core';
import { ProductpageComponent} from './productpage.component';
import {CommonModule} from "@angular/common";
import {ProductpageRoutingModule} from "./productpage-routing.module";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {FormsModule} from "@angular/forms";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {SplitterModule} from "primeng/splitter";
import {TreeTableModule} from "primeng/treetable";
import {TreeModule} from "primeng/tree";
import {CommentsComponent} from "../comments/comments.component";
import {BrowserModule} from "@angular/platform-browser";
import {RatingModule} from "primeng/rating";
import {DividerModule} from "primeng/divider";


@NgModule({
    declarations:[ProductpageComponent],
    imports: [
        CommonModule,
        ProductpageRoutingModule,
        DialogModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        ButtonModule,
        RippleModule,
        ConfirmDialogModule,
        FormsModule,
        ToolbarModule,
        FileUploadModule,
        TableModule,
        SplitterModule,
        TreeTableModule,
        TreeModule,
        CommentsComponent,
        RatingModule,
        DividerModule

    ]
})
export class ProductpageModule { }
