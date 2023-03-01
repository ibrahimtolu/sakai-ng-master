import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {eProdoct} from "../model/eprodoct";
import {log10} from "chart.js/helpers";
import {Comment} from "../model/comment";

@Injectable()
export class CommentService {


    constructor(private http: HttpClient, @Inject("url") private url: string) {

    }


    getAllCommentByProductId(id:number) {
        return this.http.get<Comment[]>(this.url + "comment/getComment/"+id);
    }
    saveProduct(product:eProdoct) {

      let status=  this.http.post<any>(this.url + "products/save/", product).subscribe(data => {
            console.log(data)
        });




    }

    deleteProduct(id:number){
        console.log(this.url + "products/delete/" + id)
          this.http.delete<boolean>(this.url + "products/delete/" + id).subscribe(data=> {
              console.log(data)
          }
      );


    }
}
