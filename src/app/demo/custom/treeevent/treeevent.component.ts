import {
    Component
} from '@angular/core';
import {MessageService} from "primeng/api";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';


@Component({
    selector: 'app-anasayfa',
    templateUrl: './treeevent.component.html',
    providers: [MessageService]

})

export class TreeeventComponent  {
    users!:User[];
     files!: TreeNode[];

    constructor(private userService:UserService) {
        this.userService.getUsers().then(value => {
            this.users=value;
            console.log(this.users);
        });
        this.userService.getFiles().then(value => {
            this.files=value;
            console.log(this.files);
        })
    }

}




