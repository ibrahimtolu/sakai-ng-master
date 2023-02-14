import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NameComponent} from "./name.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: NameComponent }
    ])],
    exports: [RouterModule]
})
export class NameRoutingModule { }
