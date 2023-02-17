import {
    Component, DoCheck, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges
} from '@angular/core';
import {TableModule} from "primeng/table";
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {ButtonModule} from "primeng/button";
import { EventEmitter } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-detail',
    imports: [
        TableModule,
        ButtonModule
    ],
    templateUrl: './detail.component.html'

})

export class DetailComponent implements  OnChanges,OnInit   {

    @Output() myMethod: EventEmitter<any> = new EventEmitter();

    cols: any = [];

    @Input() data?:boolean;
    @Input() users!:User[];

    constructor(private userService:UserService) {
        console.log("Constructor calisiyor");
    }



    ngOnInit(): void {

        console.log("");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("onChange"+this.data);
        this.data=!this.data;
    }
    changeData() {
        this.myMethod.emit(null);
        this.data=!this.data;
        console.log("detailPage"+this.data);

    }

}




