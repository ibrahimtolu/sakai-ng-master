import {
    Component, OnChanges,
    OnInit, Output,
    SimpleChanges
} from '@angular/core';
import {provideRouter} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Table} from "primeng/table";
import {Product} from "../../api/product";
import {MessageService} from "primeng/api";
import {User} from "../../model/user";


@Component({
    selector: 'app-anasayfa',
    templateUrl: './anasayfa.component.html',
    providers: [MessageService]

})

export class AnasayfaComponent implements OnInit, OnChanges {

    ad?: string;

    num: number = 0;

    selectedUser?: Product;

    renk: string = "bg-primary";
    @Output() data: boolean = true;

    users!: User[];

    activityValues: number[] = [0, 100];

    cols: any = [];

    hesapla(): void {
        console.log(typeof this.ad);
        this.num += Number(this.ad);
    }

    constructor(public userService: UserService, private messageService: MessageService) {
        this.isRowSelectable = this.isRowSelectable.bind(this);
    }

    ngOnChanges(changes: SimpleChanges): void {
       this.data=!this.data;
        console.log("anasayfa on Change Data:",this.data);
    }

    statuses: any = [];

    loading: boolean = true;
    representatives: any = [];

    ngOnInit() {

        this.userService.getUsers().then(data => {
            this.users = data;
            this.loading = false;
        });

        this.representatives = [
            {name: "Amy Elsner", image: 'amyelsner.png'},
            {name: "Anna Fali", image: 'annafali.png'},
            {name: "Asiya Javayant", image: 'asiyajavayant.png'},
            {name: "Bernardo Dominic", image: 'bernardodominic.png'},
            {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
            {name: "Ioni Bowcher", image: 'ionibowcher.png'},
            {name: "Ivan Magalhaes", image: 'ivanmagalhaes.png'},
            {name: "Onyama Limba", image: 'onyamalimba.png'},
            {name: "Stephen Shaw", image: 'stephenshaw.png'},
            {name: "Xuxue Feng", image: 'xuxuefeng.png'}
        ];
        this.statuses = [
            {label: 'Unqualified', value: 'unqualified'},
            {label: 'Qualified', value: 'qualified'},
            {label: 'New', value: 'new'},
            {label: 'Negotiation', value: 'negotiation'},
            {label: 'Renewal', value: 'renewal'},
            {label: 'Proposal', value: 'proposal'}
        ]
    }

    onRowSelect({event}: { event: any; }) {
        this.messageService.add({severity: 'info', summary: 'User Selected', detail: event.data.name});
    }

    isRowSelectable(event: { data: any; }) {
        return !this.isOutOfStock({data: event.data});
    }

    isOutOfStock({data}: { data: any }) {
        return data.inventoryStatus === 'OUTOFSTOCK';
    }

    clear(table: Table) {
        table.clear();
    }

    changeData() {
        this.data = !this.data;
        console.log("Anasayfapag", this.data);
    }

    onOpen($event: any) {
        this.data=!this.data;
    }
}




