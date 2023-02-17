import {
    Component, OnInit
} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {eProdoct} from "../../../model/eprodoct";
import {EproductsService} from "../../../service/eproducts.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-anasayfa',
    templateUrl: './eticaretdashboard.component.html'

})

export class EticaretdashboardComponent implements OnInit {
    items!: MenuItem[];
    value3: number = 0;
    shopAmount: number = 0;


    fiyat: number = 0;
    productDialog!: boolean;

    products!: eProdoct[];

    shopProducts!: eProdoct[];



    product!: eProdoct;
    shopedProduct: eProdoct[] = [];

    selectedProducts!: eProdoct [];

    submitted!: boolean;

    statuses!: any[];

    constructor(private productService: EproductsService,private router:Router, private messageService: MessageService, private confirmationService: ConfirmationService) {
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
        this.shopAmount+=1;
    }

    deleteProduct(product: eProdoct) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => val.id !== product.id);
                this.product = {
                    id: "",
                    name: "",
                    description: "",
                    image: "",
                    price: 0,
                    category: "",
                    amount: 0


                };

                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Deleted',
                    life: 3000
                });
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;
        this.product.name?.trim();


        if (this.product.id) {
            this.products[this.findIndexById(this.product.id)] = this.product;
            this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Added to Shop', life: 3000});
        } else {
            this.product.id = this.createId();
            this.product.image = 'product-placeholder.svg';
            this.products.push(this.product);
            this.shopedProduct.push(this.product);
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Product Created',
                life: 3000
            });
        }
        console.log(this.shopedProduct.length);
        this.shopedProduct.forEach(value => {
            console.log(value.price);
        })

        this.products = [...this.products];
        this.productDialog = false;
        this.product = {} as eProdoct;

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

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }


    shopPageRouter() {
        this.router.navigate(['shop'])

    }
}






