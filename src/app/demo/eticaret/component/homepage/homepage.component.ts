import {

    Component
} from '@angular/core';

import {ProductServiceSpring} from "../../../service/spring.service";

import {SelectItem} from "primeng/api";
import {eProdoct} from "../../../model/eprodoct";


@Component({
    selector: 'app-anasayfa',
    templateUrl: './homepage.component.html'

})

export class HomepageComponent  {



    products!: eProdoct[];

    sortOptions!: SelectItem[];

    sortOrder!: number;

    sortField!: string;

    constructor(private productService:ProductServiceSpring) { }

    ngOnInit() {
        this.productService.getAllProduct().subscribe((data) => {
            console.log(data)
            this.products=data;

        });

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];
    }

    onSortChange(event:any) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
}



