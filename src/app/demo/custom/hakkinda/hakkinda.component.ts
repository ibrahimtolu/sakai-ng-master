import {

    Component

} from '@angular/core';


interface Lesson {
    name: string,
    code: string
}
@Component({
    selector: 'app-anasayfa',
    templateUrl: './hakkinda.component.html'

})


export class HakkindaComponent {
    ad?: string;

    nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    goster: boolean = true;
    num: number = 0;
    renk:string="bg-primary";
    gender: any[]=[ 'male' , 'female' , 'nothing'];

    options:any[]=[{name:"Book"},];


    selectedCities: string[] = [];

    selectedCategories: any[] = ['Technology', 'Sports'];

    categories: any[] = [{name: 'Ayakkabi', key: 1}, {name: 'Telefon', key: 2}, {name: 'Elbise', key: 3}];

    lesson: Lesson[];

    selectedCity?: Lesson;
    selectedLessonCodes?: string[];

    constructor() {
        this.lesson = [
            {name: 'Math', code: 'NY'},
            {name: 'English', code: 'RM'},
            {name: 'Pyhsic', code: 'LDN'},
            {name: 'Geometri', code: 'IST'},
        ];
    }



    hesapla(): void {


        console.log(typeof this.ad);
        this.num += Number(this.ad);
        this.renk="green";
        console.log(this.gender);

    }
}




