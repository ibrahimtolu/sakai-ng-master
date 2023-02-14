import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {NameRoutingModule} from "./name-routing.module";

@NgModule({

    imports: [
        CommonModule,
        NameRoutingModule,

    ]
})
export class NameModule {



}
