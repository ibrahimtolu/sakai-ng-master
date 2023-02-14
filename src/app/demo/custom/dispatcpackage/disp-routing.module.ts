import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DispComponent} from './disp.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DispComponent }
    ])],
    exports: [RouterModule]
})
export class DispRoutingModule { }
