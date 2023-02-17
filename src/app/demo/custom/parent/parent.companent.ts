import {
    AfterViewInit,
    Component,
    ContentChild,
    ContentChildren,
    ElementRef,
    QueryList, Renderer2,
    ViewChild,
    ViewChildren
} from '@angular/core';

import {ChildComponent} from "../child/child.component";


@Component({
    selector: 'app-parent',
    templateUrl: './parent.companent.html'

})

export class ParentComponent implements AfterViewInit  {


    @ViewChild(ChildComponent,{static:true}) childComponent!:ChildComponent;
    @ViewChildren(ChildComponent) childrenComponent!:QueryList<ChildComponent>;

    @ContentChild(ChildComponent) headerContent!:ElementRef;
    @ContentChild('name') nameRef = {} as ElementRef;
    @ContentChildren(ChildComponent) contentChildren!: QueryList<ChildComponent>;
    @ContentChild(ChildComponent) childC!: Component;
    render!:Renderer2;


    ngAfterViewInit(): void {
       /* this.childrenComponent.forEach(test => console.log(test.testString));
        console.log(this.childComponent.testString);*/
        console.log("Test");
       this.contentChildren.forEach(item => {
           console.log(item);
           console.log("s");
       });
 /*      this.childC.nativeElement.setStyle(this.headerContent.nativeElement,"font-size","25px");
*/
        this.headerContent.nativeElement.setStyle("font-size","25px");


    }
    parentString:string="messafe From ParentCompanent";
}




