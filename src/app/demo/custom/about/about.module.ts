import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent} from './about.component';
import {CommonModule} from "@angular/common";
import {AboutRoutingModule} from "./about-routing.module";

@NgModule({
    declarations:[AboutComponent],
    imports:[
        CommonModule,
        AboutRoutingModule
    ]
})
export class AboutModule { }
