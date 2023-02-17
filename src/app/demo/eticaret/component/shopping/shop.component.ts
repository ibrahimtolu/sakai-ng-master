import {
    Component, ContentChild, Input, OnInit
} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {eProdoct} from "../../../model/eprodoct";
import {EproductsService} from "../../../service/eproducts.service";


@Component({
    selector: 'app-anasayfa',
    templateUrl: './shop.component.html'

})

export class ShopComponent implements OnInit{

    items!: MenuItem[];
    value3: number=0;
    shopAmount:number=0;

    fiyat:number=0;
    productDialog!: boolean;

    products: eProdoct[]=[];

    product!:eProdoct;

    selectedProducts!: eProdoct [];

    submitted!: boolean;

    statuses!: any[];
    totalPrice: number=0;
    amout!: number;

    constructor(private productService: EproductsService, private messageService: MessageService, private confirmationService: ConfirmationService) {
        this.items = [];
  // @ts-ignore
        this.products=JSON.parse(localStorage.getItem("products"));
        this.products.forEach(value => {
            this.totalPrice+=value.price*value.amount;
        })


        console.log(this.product);
    }

    addProduct(product:eProdoct){
        console.log("heldi");
        this.products.push(product);


    }

    ngOnInit() {

        this.statuses = [
            {label: 'INSTOCK', value: 'instock',route:"eticaretdashboard"},
            {label: 'LOWSTOCK', value: 'lowstock'},
            {label: 'OUTOFSTOCK', value: 'outofstock'}
        ];

        this.items = [

            {label: 'Home', icon: 'pi pi-fw pi-home' },
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}


        ];
    }




    shopProduct(product: eProdoct) {
        this.product = {...product};
        this.shopAmount+=1;
        this.productDialog = true;
    }

    deleteProduct(product: eProdoct) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {

                this.products = this.products.filter(val => val.id !== product.id,this.totalPrice-=product.price);
                console.log(this.totalPrice,this.product.price);
                this.product = {
                    id: "",
                    name:"",
                    description:"",
                    image:"",
                    price:0,
                    category:"",
                    amount:0,
                    stock:0


                };

                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;



        if(this.product.name.trim()){

        if (this.product.id) {
            this.products[this.findIndexById(this.product.id)] = this.product;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Added to Shop', life: 3000});
        }
        else {
            this.product.id = this.createId();
            this.product.image = 'product-placeholder.svg';
            this.products.push(this.product);
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        }

        this.products = [...this.products];
        this.productDialog = false;
        this.product = {} as eProdoct;
        }

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
        for ( var i = 0; i < 5; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }



}






