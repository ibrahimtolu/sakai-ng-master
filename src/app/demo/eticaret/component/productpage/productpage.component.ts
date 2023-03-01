import {
    Component, ContentChild, Input, OnInit
} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService, TreeNode} from "primeng/api";
import {eProdoct} from "../../../model/eprodoct";
import {EproductsService} from "../../../service/eproducts.service";
import {Store} from "@ngrx/store";
import {shopDecrement} from "../../../../../store/shop/shop.actions";
import {ShopService} from "../../../service/shop.service";
import {BuyService} from "../../../service/buy.service";
import {NodeService} from "../../../service/node.service";


@Component({
    selector: 'app-productpage',
    templateUrl: './productpage.component.html'

})

export class ProductpageComponent   {

    product!:eProdoct;
    files!: TreeNode[];

    cols!: any[];


    productDialog: boolean;
    products: eProdoct[]=[];
    constructor(private nodeService: NodeService) {
        this.productDialog=true;

        // @ts-ignore
        this.product=JSON.parse(localStorage.getItem("Product"));
        console.log(this.product);
        this.products.push(this.product);
    }


    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);

        this.cols = [
            { field: 'name', header: 'Name' }
        ];
    }

    shop() {

    }

    hideDialog() {
        this.productDialog=false;
    }
}






