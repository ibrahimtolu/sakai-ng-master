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

    ]
})
export class ProductpageModule { }
