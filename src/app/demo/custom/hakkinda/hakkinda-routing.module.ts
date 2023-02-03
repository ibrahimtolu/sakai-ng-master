import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HakkindaComponent} from './hakkinda.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HakkindaComponent }
    ])],
    exports: [RouterModule]
})
export class HakkNdaRoutingModule { }
