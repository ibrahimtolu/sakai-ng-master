import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {ProductService} from './demo/service/product.service';
import {CountryService} from './demo/service/country.service';
import {CustomerService} from './demo/service/customer.service';
import {EventService} from './demo/service/event.service';
import {IconService} from './demo/service/icon.service';
import {NodeService} from './demo/service/node.service';
import {PhotoService} from './demo/service/photo.service';
import {AnasayfaModule} from "./demo/custom/anasayfa/anasayfa.module";
import {FormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {HakkindaModule} from "./demo/custom/hakkinda/hakkinda.module";
import {AboutModule} from "./demo/custom/about/about.module";
import {UserService} from "./demo/service/user.service";
import {ParentModule} from "./demo/custom/parent/parent.module";
import {AsyncPipe, CurrencyPipe, LocationStrategy, NgForOf, NgIf, PathLocationStrategy} from "@angular/common";
import {TreeeventModule} from "./demo/custom/treeevent/treeevent.module";
import {COUNTER_REDUCER, CounterState} from "./demo/model/counter";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "../store/home/home.reducers";
import {HomeModule} from "./demo/custom/home/home.module";
import {HomeComponent} from "./demo/custom/home/home.component";
import {NameModule} from "./demo/custom/name/name.module";
import {NameComponent} from "./demo/custom/name/name.component";
import {NAME_REDUCER} from "./demo/model/name";
import {nameReducer} from "../store/name/name.reducers";
import {EproductsService} from "./demo/service/eproducts.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {shopcounterReducer} from "../store/shop/shop.reducers";
import {SHOP_REDUCER} from "./demo/model/shop";
import {AuthService} from "./shared/auth.service";
import {ProductServiceSpring} from "./demo/service/spring.service";
import {ShopService} from "./demo/service/shop.service";
import {LoginControlService} from "./demo/service/loginControl.service";
import {BuyService} from "./demo/service/buy.service";
import {HomepageModule} from "./demo/eticaret/component/homepage/homepage.module";
import {HomepageComponent} from "./demo/eticaret/component/homepage/homepage.component";
import {ProductpageModule} from "./demo/eticaret/component/productpage/productpage.module";
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";
import {DropdownModule} from "primeng/dropdown";
import {CommentService} from "./demo/service/comment.service";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent, HomeComponent, NameComponent,HomepageComponent
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
        StoreModule.forRoot({[COUNTER_REDUCER]: counterReducer}),
        StoreModule.forRoot({[NAME_REDUCER]: nameReducer}),
        StoreModule.forRoot({[SHOP_REDUCER]: shopcounterReducer}),
        NameModule,
        AsyncPipe,
        HomepageModule,
        CurrencyPipe,
        ProductpageModule,
        DataViewModule,
        RatingModule,
        DropdownModule,
        BrowserModule
    ],

    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        {provide: "url", useValue: "http://localhost:8080/"}, ProductServiceSpring,
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, UserService, EproductsService, ConfirmationService, MessageService, AuthService,
        ShopService, LoginControlService,BuyService,CommentService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
