import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShopComponent} from './shop.component';
import {CommonModule} from "@angular/common";
import {ShopRoutingModule} from "./shop-routing.module";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";
import {MultiSelectModule} from "primeng/multiselect";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {SliderModule} from "primeng/slider";
import {DividerModule} from "primeng/divider";
import {InputTextModule} from "primeng/inputtext";
import {TabMenuModule} from "primeng/tabmenu";
import {CardModule} from "primeng/card";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {RadioButtonModule} from "primeng/radiobutton";
import {DialogModule} from "primeng/dialog";
import {ToolbarModule} from "primeng/toolbar";
import {ToastModule} from "primeng/toast";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MenubarModule} from "primeng/menubar";

@NgModule({
    declarations:[ShopComponent],
    imports: [
        CommonModule,
        ShopRoutingModule,
        DividerModule,
        ButtonModule,
        InputTextModule,
        TabMenuModule,
        CardModule,
        InputNumberModule,
        FormsModule,
        ConfirmDialogModule,
        RippleModule,
        RadioButtonModule,
        DropdownModule,
        DialogModule,
        TableModule,
        ToolbarModule,
        FileUploadModule,
        ToastModule,
        InputTextareaModule,
        MenubarModule
    ]
})
export class ShopModule { }
