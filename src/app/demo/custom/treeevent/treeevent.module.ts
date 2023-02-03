import { NgModule } from '@angular/core';
import { TreeeventComponent} from './treeevent.component';
import {CommonModule} from "@angular/common";
import {TreeeventRoutingModule} from "./treeevent-routing.module";
import {TreeModule} from "primeng/tree";


@NgModule({
    declarations:[TreeeventComponent],
    imports: [
        CommonModule,
        TreeeventRoutingModule,
        TreeModule
    ]
})
export class TreeeventModule { }
