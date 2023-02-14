import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DispComponent} from './disp.component';
import {CommonModule} from "@angular/common";
import {DispRoutingModule} from "./disp-routing.module";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";
import {SubsComponent} from "../substpackage/subs.component";

@NgModule({

    declarations:[DispComponent],
    imports: [
        CommonModule,
        DispRoutingModule,
        FormsModule,
        ButtonModule,
        ChipsModule,
        SubsComponent
    ]
})
export class DispModule { }
