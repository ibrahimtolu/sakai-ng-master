import {
    Component, ContentChild, Input, OnInit
} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {eProdoct} from "../../../model/eprodoct";
import {EproductsService} from "../../../service/eproducts.service";
import {Store} from "@ngrx/store";
import {shopDecrement} from "../../../../../store/shop/shop.actions";
import {ShopService} from "../../../service/shop.service";
import {BuyService} from "../../../service/buy.service";
import {parse} from "@typescript-eslint/parser";
import {ShopUser} from "../../../model/ShopUser";


@Component({
    selector: 'app-anasayfa',
    templateUrl: './shop.component.html'

})

export class ShopComponent implements OnInit {

    items!: MenuItem[];

    productDialog!: boolean;

    products: eProdoct[] = [];
    product!: eProdoct;
    selectedProducts!: eProdoct [];
    submitted!: boolean;
    statuses!: any[];
    totalPrice: number = 0;
    productAmount: number = 0;
    shopAmount: number = 1;

    constructor(private store: Store, private shopService: ShopService, private productService: EproductsService,
                private messageService: MessageService, private confirmationService: ConfirmationService,
                private buyService: BuyService) {


        this.updateProductList();

    }


    ngOnInit() {
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

    deleteProduct(product: eProdoct) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',

            accept: () => {


                this.shopService.deleteShopProduct(product.id).subscribe(data => {
                    if (data)
                        this.updateProductList();
                });

                this.totalPrice -= product.price * product.amount;

                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Deleted',
                    life: 3000
                });
            }
        });

        this.store.dispatch(shopDecrement());
    }


    amountControl(products: eProdoct) {
        console.log("products", products);
        let shopUser!:ShopUser;
        // @ts-ignore
        let userId = Number(JSON.parse(localStorage.getItem('UserId')));
        // @ts-ignore

        shopUser ={
            product:products,
            user:{
                userId:userId
            },


        }


        this.shopService.putShopUser(shopUser);


    }

    updateProductList() {

        // @ts-ignore
        let userId = Number(JSON.parse(localStorage.getItem('UserId')));
        this.products.splice(0);
        this.shopService.getAllShopById(userId).subscribe((response) => {

            console.log(response);
            response.forEach((value: any) => {
                this.product = value;
                this.products.push(this.product);
            });

        });

    }

    buySelectedProducts() {
        this.selectedProducts.forEach(value => {
            this.buyService.addShop(value);
        });


    }


    testM(products: any) {
        console.log("products", products.product);
        let shopUser!:ShopUser;
        // @ts-ignore
        let userId = Number(JSON.parse(localStorage.getItem('UserId')));
        // @ts-ignore

        shopUser ={
            shopUserId:products.id,
            product:products.product,
            user:{
                userId:userId
            },
            shopAmount:products.shopAmount


        }


        console.log(shopUser);
        // this.shopService.putShopUser(shopUser);


    }
}






