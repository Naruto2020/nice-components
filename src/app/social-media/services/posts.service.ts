import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";
import { environment } from "../../../environments/environment.development";

/* on ne { providedIn: 'root' } pas ce service car il ne servira 
que dans ce module qui est lazy-loaded il doit etre  lié uniquement 
au module où il sert pas intéressant donc qu'il soit charger a la racine  */

@Injectable()
export class PostsService {
    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]> {
        const posts = this.http.get<Post[]>(`${environment.apiUrl}/posts`);
        return posts;
    }

    addNewComment(postCommented: {comment: string, postId: number}) {
        console.log(postCommented);
    }
}