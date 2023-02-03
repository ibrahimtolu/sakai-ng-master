import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreeeventComponent} from './treeevent.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TreeeventComponent }
    ])],
    exports: [RouterModule]
})
export class TreeeventRoutingModule { }
