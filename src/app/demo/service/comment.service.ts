import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {eProdoct} from "../model/eprodoct";
import {log10} from "chart.js/helpers";
import {ProductComment} from "../model/comment";


@Injectable()
export class CommentService {


    constructor(private http: HttpClient, @Inject("url") private url: string) {

    }



    saveComment(newCommet: ProductComment) {
        this.http.post<boolean>(this.url + "comment/save/", newCommet).subscribe(data => {
            console.log(data)
        });

    }

    getAllCommentByProductId(id:number):Observable<any[]> {
         return this.http.get<any[]>(this.url + "comment/getComment/"+id);

    }
}
