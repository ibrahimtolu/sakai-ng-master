import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminpageComponent} from './adminpage.component';
import {CommonModule} from "@angular/common";
import {AdminpageRoutingModule} from "./adminpage-routing.module";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {DividerModule} from "primeng/divider";
import {InputTextModule} from "primeng/inputtext";
import {TabMenuModule} from "primeng/tabmenu";
import {CardModule} from "primeng/card";
import {InputNumberModule} from "primeng/inputnumber";
import {RadioButtonModule} from "primeng/radiobutton";
import {DialogModule} from "primeng/dialog";
import {RatingModule} from "primeng/rating";
import {ToolbarModule} from "primeng/toolbar";
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
    declarations:[AdminpageComponent],
    imports: [
        CommonModule,
        AdminpageRoutingModule,
        DividerModule,
        ButtonModule,
        InputTextModule,
        TabMenuModule,
        CardModule,
        InputNumberModule,
        FormsModule,
        TableModule,
        RadioButtonModule,
        DropdownModule,
        DialogModule,
        RatingModule,
        FileUploadModule,
        ToolbarModule,
        ToastModule,
        RippleModule,
        InputTextareaModule,
        ConfirmDialogModule
    ]
})
export class AdminpageModule { }
