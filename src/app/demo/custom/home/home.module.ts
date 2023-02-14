import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({

    imports: [
        CommonModule,
        HomeRoutingModule,

    ]
})
export class HomeModule { }
