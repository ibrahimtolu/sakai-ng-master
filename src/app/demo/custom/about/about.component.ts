import {
    AfterContentChecked,
    AfterContentInit,
    Component,
    DoCheck,
    OnChanges, OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';
import {provideRouter} from "@angular/router";


@Component({
    selector: 'app-anasayfa',
    templateUrl: './about.component.html'

})

export class AboutComponent {
    ad?: string;

    nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    goster: boolean = true;
    num: number = 0;
    renk:string="bg-primary";


    hesapla(): void {


        console.log(typeof this.ad);
        this.num += Number(this.ad);
        this.renk="green";

    }

    goToPage() {
    }
}




