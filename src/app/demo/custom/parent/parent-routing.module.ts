import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ParentComponent} from "./parent.companent";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ParentComponent }
    ])],
    exports: [RouterModule]
})
export class ParentRoutingModule { }
