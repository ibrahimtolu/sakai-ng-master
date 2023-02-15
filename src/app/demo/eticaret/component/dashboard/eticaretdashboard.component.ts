import {
    Component, OnInit
} from '@angular/core';
import {MenuItem} from "primeng/api";


@Component({
    selector: 'app-anasayfa',
    templateUrl: './eticaretdashboard.component.html'

})

export class EticaretdashboardComponent implements OnInit{
    items!: MenuItem[];
    value3: number=0;
    ngOnInit() {
        this.items = [

            {label: 'Home', icon: 'pi pi-fw pi-home' },
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];
    }

}




