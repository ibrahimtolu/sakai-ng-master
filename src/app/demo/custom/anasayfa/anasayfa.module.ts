import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnasayfaComponent} from './anasayfa.component';
import {CommonModule} from "@angular/common";
import {AnasayfaRoutingModule} from "./anasayfa-routing.module";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";
import {MultiSelectModule} from "primeng/multiselect";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {SliderModule} from "primeng/slider";
import {DetailComponent} from "../detail/detail.component";

@NgModule({
    declarations:[AnasayfaComponent],
    imports: [
        CommonModule,
        AnasayfaRoutingModule,
        FormsModule,
        ButtonModule,
        ChipsModule,
        MultiSelectModule,
        TableModule,
        DropdownModule,
        FileUploadModule,
        SliderModule,
        DetailComponent
    ]
})
export class AnasayfaModule { }
