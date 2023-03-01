import {
    Component, OnInit
} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {eProdoct} from "../../../model/eprodoct";
import {EproductsService} from "../../../service/eproducts.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {shopInctement} from "../../../../../store/shop/shop.actions";
import {Observable} from "rxjs";
import {selectCurrentShop} from "../../../../../store/shop/shop.selectors";
import {log10} from "chart.js/helpers";
import {ProductServiceSpring} from "../../../service/spring.service";
import {ShopService} from "../../../service/shop.service";


@Component({

    selector: 'app-anasayfa',
    templateUrl: './eticaretdashboard.component.html'


})

export class EticaretdashboardComponent implements OnInit {

    items!: MenuItem[];
    productAmount: number = 0;
    test: number = 0
    shopAmount!: Observable<number>;
    productDialog!: boolean;
    products!: eProdoct[] ;
    shopProducts: eProdoct[] = [];
    product!: eProdoct;
    selectedProducts!: eProdoct [];
    submitted!: boolean;
    statuses!: any[];

    constructor(private shopService:ShopService,private productServiceSpring:ProductServiceSpring,private store: Store, private productService: EproductsService, private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService) {

        this.productServiceSpring.getAllProduct().subscribe((response) => {
            this.products=response;
        });
    }

    ngOnInit() {

        this.statuses = [
            {label: 'INSTOCK', value: 'instock'},
            {label: 'LOWSTOCK', value: 'lowstock'},
            {label: 'OUTOFSTOCK', value: 'outofstock'}
        ];

        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];

        this.shopAmount = this.store.select(selectCurrentShop);
    }

    shopProduct(product: eProdoct) {

        this.product = {...product};
        this.productDialog = true;

    }


    hideDialog() {
        this.productDialog = false;
        this.submitted = false;


    }


    shop() {
        this.submitted = true;
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Added to Shop',
            life: 3000
        });
        console.log("ThisPro",this.product);

        this.shopService.addShop(this.product);

        this.productDialog = false;
        console.log(this.shopProducts)

        this.store.dispatch(shopInctement());
        this.product = {} as eProdoct;

    }

    shopControl(): boolean {

        let status: boolean = true;

        this.shopProducts.forEach(value => {
            if (value.id == this.product.id) {
                value.amount++;
                status = false;
            }
        });

        return status;

    }


}






