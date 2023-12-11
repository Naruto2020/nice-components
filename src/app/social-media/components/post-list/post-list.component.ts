import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {

  posts$!: Observable<Post[]>

  constructor(private route: ActivatedRoute, private postService: PostsService){}

  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(res => res['posts'])
    )
  }

  onPostCommented(postCommented: {comment: string, postId: number}) {
    this.postService.addNewComment(postCommented)
  }

}
