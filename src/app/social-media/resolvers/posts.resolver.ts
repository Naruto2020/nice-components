import { Injectable } from "@angular/core";
import { Post } from "../models/post.model";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PostsService } from "../services/posts.service";

@Injectable()
export class PostsResolver implements Resolve<Post[]>{
    constructor(private postsService: PostsService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
        return this.postsService.getPosts();
    }
    
}