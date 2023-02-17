import {
    Component, OnInit
} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {eProdoct} from "../../../model/eprodoct";
import {EproductsService} from "../../../service/eproducts.service";
import {Router} from "@angular/router";
import {arrRemove} from "rxjs/internal/util/arrRemove";
import {verifyHostBindings} from "@angular/compiler";


@Component({
    selector: 'app-anasayfa',
    templateUrl: './eticaretdashboard.component.html'

})

export class EticaretdashboardComponent implements OnInit {
    items!: MenuItem[];
    productAmount: number = 0;
    shopAmount: number = 0;


    fiyat: number = 0;
    productDialog!: boolean;

    products!: eProdoct[];

    shopProducts: eProdoct[] = [];


    product!: eProdoct;


    selectedProducts!: eProdoct [];

    submitted!: boolean;

    statuses!: any[];

    constructor(private productService: EproductsService, private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService) {


    }

    ngOnInit() {

        this.productService.geteProducts().then(data => this.products = data);

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
    }

    shopProduct(product: eProdoct) {

        this.product = {...product};
        this.productDialog = true;


    }


    hideDialog() {
        this.productDialog = false;
        this.submitted = false;

        // @ts-ignore
    }


    shop() {

        this.submitted = true;
        if (this.product.name.trim()) {

            if (this.product.id) {
                console.log("this.product:", this.product)
                localStorage.setItem("product", JSON.stringify(this.product));
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Added to Shop',
                    life: 3000
                });

            } else {

            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {} as eProdoct;
        }
        // @ts-ignore
        let localStoreProduct = JSON.parse(localStorage.getItem("product"));
        this.shopProducts.push(localStoreProduct);
        localStorage.setItem("products", JSON.stringify(this.shopProducts));
        this.shopAmount += 1;


    }



    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }
}






