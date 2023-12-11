import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../../core/models/comment.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

/**
 * @triger déclencheur d'annimation qui va permettre d'implémenter une annimation 
 * les annimation sont le passage de l'app d'un etat à un autre avec une transition entre les deux 
 */

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
  animations: [
    trigger('listItem', [
      state('default', style({
        transform: 'scale(1)',
        ' background-color': 'white',
        'z-index': 1
      })),
      state('active', style({
        transform: 'scale(1.05)',
        ' background-color': 'rgb(201, 157, 242)',
        'z-index': 2
      })),
      transition('default => active', [
        animate('100ms ease-in-out'),
      ]),
      transition('active => default', [
        animate('500ms ease-in-out'),
      ])
    ])
  ]
})
export class CommentsComponent implements OnInit {

  @Input() comments!: Comment[];
  /**
   * @Output permet une communication du composant enfant vers le parent 
   * Qaund on click sue le bouton on emmet un evenement contenant les données du formulaire le cas échéant via la fonction onleaveComment 
   * On écoute dans post-list-item.html via (newComment)="onNewComment($event)"
   * Et on réagit dans post-list-item.component 
   */
  @Output() newComment  = new EventEmitter<string>();

  commentCtrl!:FormControl;

  constructor(private formBuilder: FormBuilder){ }

  ngOnInit(): void {
  
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)])
  }

  onleaveComment(){
    if (this.commentCtrl.invalid) {
      return;
    }
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }

}
