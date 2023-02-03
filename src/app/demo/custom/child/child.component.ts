import {
    Component, Input
} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";

@Component({
    standalone: true,
    selector: 'app-child',
    imports: [
        TableModule,
        ButtonModule
    ],
    templateUrl: './child.component.html'

})

export class ChildComponent   {
    num:number=0;
 @Input()  testString!:string;

    numIncrement(){
        this.num++;

    }


    numDecrease() {
        this.num--;
    }

    alert() {
        console.log(this.testString);
    }
}




