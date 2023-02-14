import {
    Component, OnInit
} from '@angular/core';
import {MessageService} from "primeng/api";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";
import {TreeNode} from 'primeng/api';


@Component({
    selector: 'app-anasayfa',
    templateUrl: './treeevent.component.html',
    providers: [MessageService]

})

export class TreeeventComponent {
    users!:User[];
     files!: TreeNode[];

    selectedFiles!: User[];
    selectedItem!: string | undefined;
    sayi !: number;

    testonbj:object={

    "id":1,
    "label":"test"

    };

    numArray=[1,2,3];

    constructor(private userService:UserService) {
        this.userService.getTreeItem().then(value => {
            this.users=value;

        });
        this.userService.getFiles().then(value => {
            this.files=value;

        });
        console.log(this.numArray);
        console.log(...this.numArray);
        console.log(...this.users);




    }

    nodeSelect($event: any) {

        this.selectedFiles.forEach(events =>{
            this.selectedItem=events.label;                  });


    }

    clearItems() {

    }
}




