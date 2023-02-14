import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EticaretdashboardComponent} from './eticaretdashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EticaretdashboardComponent }
    ])],
    exports: [RouterModule]
})
export class EticaretdashboardRoutingModule { }
