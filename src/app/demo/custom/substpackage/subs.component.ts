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
    selector: 'app-subs',
    templateUrl: './subst.component.html',
    standalone:true

})


export class SubsComponent {
    substedString!: string;
    observableString!:Observable<string>;

    constructor(private store:Store) {

    //    this.store.subscribe(value => {
        //    this.substedString=value;
      //  })
        this.observableString=store.select(selectNameChange);

        this.observableString.subscribe((value) => {
            this.substedString=value;
        })
    }


}




