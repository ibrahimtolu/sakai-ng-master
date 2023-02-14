import {
    AfterContentInit,
    Component, ContentChild, ElementRef, Input
} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {User} from "../../model/user";
import {FormsModule} from "@angular/forms";
import {NgSwitch} from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-child',
    imports: [
        TableModule,
        ButtonModule,
        FormsModule,
        NgSwitch
    ],
    templateUrl: './child.component.html'

})

export class ChildComponent implements AfterContentInit {
    @ContentChild("header") headerContent!: ElementRef;
    num:number=0;

    ngAfterContentInit() {
        console.log(2);

    }


 @Input()  testString!:string;
    @Input() selectedFiles!: User[];
    sayi!: number;

    numIncrement(){
        this.num++;
    }


    numDecrease() {
        this.num--;
    }

    constructor() {

    }
    alert() {
        console.log(this.testString);
    }


}




