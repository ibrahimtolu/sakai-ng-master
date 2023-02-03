import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnasayfaComponent} from './anasayfa.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AnasayfaComponent }
    ])],
    exports: [RouterModule]
})
export class AnasayfaRoutingModule{ }
