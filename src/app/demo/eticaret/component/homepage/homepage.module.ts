import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {HomepageRoutingModule} from "./homepage-routing.module";

@NgModule({

    imports: [
        CommonModule,
        HomepageRoutingModule,

    ]
})
export class HomepageModule { }
