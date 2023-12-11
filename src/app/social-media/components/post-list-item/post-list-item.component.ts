import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss'
})
export class PostListItemComponent implements OnInit {
  @Input() post!: Post
  /**
   * Nous somme dans une archi Smart-Dumb ou Presenter-Container
   * Post-list-item est une composant presenter de ce fait il ne doit pas contenir de logique de com avec les service  
   * Nous allons donc utiliser un @output pour emettre un évènnement vers le parent afin de finalement traité 
   */
  @Output() postCommented = new EventEmitter<{ comment: string, postId: number}>(); 

  tempUser =  {firstName : 'steve', lastName: 'kounga'}
  
  constructor(){}
  
  
  
  
  ngOnInit(): void {
    
  }
  
  onNewComment(comment: string) {
    this.postCommented.emit({ comment: comment, postId: this.post.id})
  }
}
