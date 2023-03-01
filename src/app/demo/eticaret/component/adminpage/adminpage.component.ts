import {
    Component, OnInit
} from '@angular/core';
import {ConfirmationService,MessageService} from "primeng/api";
import {eProdoct} from "../../../model/eprodoct";
import {EproductsService} from "../../../service/eproducts.service";
import {Store} from "@ngrx/store";
import {ProductServiceSpring} from "../../../service/spring.service";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";


@Component({
    selector: 'app-anasayfa',
    templateUrl: './adminpage.component.html' ,
    providers: [MessageService]

})

export class AdminpageComponent implements OnInit  {

    productDialog!: boolean;

    products: eProdoct[]=[];

    product!:eProdoct;

    selectedProducts!: eProdoct [];

    submitted!: boolean;

    statuses!: any[];

    constructor(private springService:ProductServiceSpring,private store:Store,private productService: EproductsService, private messageService: MessageService, private confirmationService: ConfirmationService) {
        this.springService.getAllProduct().subscribe((response) => {
            this.products=response;
        });
        console.log(this.products);
    }

    ngOnInit() {

        this.statuses = [
            {label: 'INSTOCK', value: 'instock'},
            {label: 'LOWSTOCK', value: 'lowstock'},
            {label: 'OUTOFSTOCK', value: 'outofstock'}
        ];
    }

    openNew() {
        this.product = {} as eProdoct;
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts(product:eProdoct) {
        console.log(product)
        // this.confirmationService.confirm({
        //     message: 'Are you sure you want to delete the selected products?',
        //     header: 'Confirm',
        //     icon: 'pi pi-exclamation-triangle',
        //     accept: () => {
        //         console.log(product);
        //         this.springService.deleteProduct(product.id);
        //         this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        //         this.product = {} as eProdoct;
        //
        //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        //     }
        // });

    }

    editProduct(product: eProdoct) {
        this.product = {...product};
         this.productDialog = true;
    }

    deleteProduct(product: eProdoct) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                console.log(product)
                 this.springService.deleteProduct(product.id);
                this.products = this.products.filter(val => val.id !== product.id);
                this.product = {} as eProdoct;
                localStorage.setItem("Products",JSON.stringify(this.products));
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct(product:eProdoct) {
        this.submitted = true;


        if(this.product.name?.trim() ){
            if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            }
            else {
                this.product.image = 'product-placeholder.svg';
                this.products.push(this.product);

                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
            }
        }


        this.springService.saveProduct(product);
            this.products = [...this.products];
            this.productDialog = false;
            this.product = {} as eProdoct;

    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    testM(product: any) {

        console.log(product);
    }
}







