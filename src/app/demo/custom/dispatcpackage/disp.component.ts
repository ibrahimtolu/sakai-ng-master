import {

    Component, OnInit

} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectNameChange} from "../../../../store/name/name.selectors";
import {Observable} from "rxjs";
import {change} from "../../../../store/name/name.actions";


interface Lesson {
    name: string,
    code: string
}

@Component({
    selector: 'app-disp',
    templateUrl: './disp.component.html'

})


export class DispComponent {
    dispCompanetString!: string;
    testString!: Observable<string>;
    str!: string;

    constructor(private store: Store) {
        this.testString = store.select(selectNameChange);
    }


    dispString() {
        console.log(this.dispCompanetString);
        this.store.dispatch(change({"name": this.dispCompanetString}));
        this.testString.subscribe((namess) => {
            this.str = namess;
        });
    }

}




