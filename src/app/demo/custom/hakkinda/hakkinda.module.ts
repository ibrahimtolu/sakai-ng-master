import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HakkindaComponent} from './hakkinda.component';
import {CommonModule} from "@angular/common";
import {HakkNdaRoutingModule} from "./hakkinda-routing.module";
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";

@NgModule({

    declarations:[HakkindaComponent],
    imports: [
        CommonModule,
        HakkNdaRoutingModule,
        ButtonModule,
        CheckboxModule,
        FormsModule,
        DropdownModule,
        MultiSelectModule
    ]
})
export class HakkindaModule { }
