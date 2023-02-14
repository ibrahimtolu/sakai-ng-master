import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent} from './login.component';
import {CommonModule} from "@angular/common";
import {LoginpageRoutingModule} from "./loginpage-routing.module";
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

@NgModule({
    declarations:[LoginComponent],
    imports: [
        CommonModule,
        LoginpageRoutingModule,
        DividerModule,
        ButtonModule,
        InputTextModule
    ]
})
export class LoginpageModule { }
