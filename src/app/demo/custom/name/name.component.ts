import {
    Component, OnInit
} from '@angular/core';
import {async, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectNameChange} from "../../../../store/name/name.selectors";
import {change} from "../../../../store/name/name.actions";


@Component({
    selector: 'app-name',
    templateUrl: './name.component.html'

})

export class NameComponent implements OnInit{

    namess !:string;
    names:Observable<string>;



    constructor(private store: Store) {
        this.names=store.select(selectNameChange);


    }

    ngOnInit(): void {
       this.names.subscribe((value)=>{
           this.namess=value;
       });
    }

    change(){

        this.store.dispatch(change({"name": this.namess}));
    }

}



