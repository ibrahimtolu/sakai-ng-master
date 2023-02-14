import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import {AnasayfaModule} from "./demo/custom/anasayfa/anasayfa.module";
import {FormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {HakkindaModule} from "./demo/custom/hakkinda/hakkinda.module";
import {AboutModule} from "./demo/custom/about/about.module";
import {UserService} from "./demo/service/user.service";
import {ParentModule} from "./demo/custom/parent/parent.module";
import {AsyncPipe, LocationStrategy, NgForOf, NgIf, PathLocationStrategy} from "@angular/common";
import {TreeeventModule} from "./demo/custom/treeevent/treeevent.module";
import {COUNTER_REDUCER} from "./demo/model/counter";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "../store/home/home.reducers";
import {HomeModule} from "./demo/custom/home/home.module";
import {HomeComponent} from "./demo/custom/home/home.component";
import {NameModule} from "./demo/custom/name/name.module";
import {NameComponent} from "./demo/custom/name/name.component";
import {NAME_REDUCER} from "./demo/model/name";
import {nameReducer} from "../store/name/name.reducers";
import {EticaretdashboardModule} from "./demo/eticaret/dashboard/eticaretdashboard.module";
import {LoginpageModule} from "./demo/eticaret/loginboard/loginpage.module";

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent,HomeComponent,NameComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        AnasayfaModule,
        FormsModule,
        ChipsModule,
        ButtonModule,
        NgIf,
        NgForOf,
        HakkindaModule,
        AboutModule,
        AnasayfaModule,
        ParentModule,
        TreeeventModule,
         HomeModule,
        StoreModule.forRoot({ [COUNTER_REDUCER]: counterReducer }),
        StoreModule.forRoot({ [NAME_REDUCER]: nameReducer }),
        AsyncPipe,
        NameModule,
        EticaretdashboardModule,
        
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
