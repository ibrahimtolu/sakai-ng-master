import {
    Component
} from '@angular/core';
import {Observable} from "rxjs";
import {selectCurrentCount} from "../../../../store/home/home.selectors";
import {Store} from "@ngrx/store";
import {decrement, increment, reset} from "../../../../store/home/home.actions";


@Component({
    selector: 'app-anasayfa',
    templateUrl: './home.component.html'

})

export class HomeComponent {
    public currentCount: Observable<number>;

    constructor(private store: Store) {
        this.currentCount=store.select(selectCurrentCount);
    }

    public increment(): void {
        this.store.dispatch(increment());
    }

    public decrement(): void {
        this.store.dispatch(decrement());
    }

    public reset(): void {
        this.store.dispatch(reset());
    }
}



