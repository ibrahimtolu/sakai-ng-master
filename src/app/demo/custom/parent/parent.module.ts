import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {ParentComponent} from "./parent.companent";
import {ChildComponent} from "../child/child.component";
import {ParentRoutingModule} from "./parent-routing.module";
import {ButtonModule} from "primeng/button";


@NgModule({
    declarations:[ParentComponent],
    imports: [
        CommonModule,
        ChildComponent,
        ParentRoutingModule,
        ButtonModule

    ]
})

export class ParentModule {}
