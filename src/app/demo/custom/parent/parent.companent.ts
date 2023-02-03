import {AfterViewInit, Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ChildComponent} from "../child/child.component";


@Component({
    selector: 'app-parent',
    templateUrl: './parent.companent.html'

})

export class ParentComponent implements AfterViewInit  {


    @ViewChild(ChildComponent,{static:true}) childComponent!:ChildComponent;
    @ViewChildren(ChildComponent) childrenComponent!:QueryList<ChildComponent>;

    ngAfterViewInit(): void {
       /* this.childrenComponent.forEach(test => console.log(test.testString));
        console.log(this.childComponent.testString);*/
        console.log("Test");

    }
    parentString:string="messafe From ParentCompanent";




}




