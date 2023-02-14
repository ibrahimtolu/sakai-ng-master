import { NgModule } from '@angular/core';
import { TreeeventComponent} from './treeevent.component';
import {CommonModule} from "@angular/common";
import {TreeeventRoutingModule} from "./treeevent-routing.module";
import {TreeModule} from "primeng/tree";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {TableModule} from "primeng/table";
import {ChildComponent} from "../child/child.component";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations:[TreeeventComponent],
    imports: [
        CommonModule,
        TreeeventRoutingModule,
        TreeModule,
        DialogModule,
        ButtonModule,
        DividerModule,
        TableModule,
        ChildComponent,
        FormsModule
    ]
})
export class TreeeventModule { }
