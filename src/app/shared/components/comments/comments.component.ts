import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../../core/models/comment.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger, query } from '@angular/animations';

/**
 * @triger déclencheur d'annimation qui va permettre d'implémenter une annimation 
 * les annimation sont le passage de l'app d'un etat à un autre avec une transition entre les deux 
 */

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    trigger('listItem', [
      state('default', style({
        transform: 'scale(1)',
        'background-color': 'white',
        'z-index': 1
      })),
      state('active', style({
        transform: 'scale(1.05)',
        'background-color': 'rgb(201, 157, 242)',
        'z-index': 2
      })),
      transition('default => active', [
        animate('100ms ease-in-out'),
      ]),
      transition('active => default', [
        animate('500ms ease-in-out'),
      ]),
      transition('void => *', [
        query('span', [
          style({
            opacity: 0
          }),
        ]),
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
          'background-color': 'rgb(201, 157, 242)'
        }),
        animate('250ms ease-out', style({
          transform: 'translateX(0)',
          opacity: 1,
          'background-color': 'white',
        })),
        query('span', [
          style({
            opacity: 1
          }),
        ])
      ]),
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
   * @animationStates est un dictionaire qui vas récupérer les index respectifs des comments et luers attribuer un état 
   */
  @Output() newComment  = new EventEmitter<string>();

  commentCtrl!:FormControl;

  animationStates: {[key: number]: 'default' | 'active'} = {};
  //listItemAnnimationState: 'default' | 'active' = 'default';

  constructor(private formBuilder: FormBuilder){ }

  ngOnInit(): void {
  
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
    for(let index in this.comments) {
      this.animationStates[index] = 'default';
    }
  }

  onleaveComment(){
    if (this.commentCtrl.invalid) {
      return;
    }
    const maxId = Math.max(... this.comments.map(comment => comment.id))
    this.comments.unshift({
      id: maxId + 1,
      comment: this.commentCtrl.value,
      createdDate: new Date().toISOString(),
      userId: 1
    });
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }

  onListItemMouseEnter(index: number) {
    this.animationStates[index] = 'active';
  }

  onListItemMouseLeave(index: number) {
    this.animationStates[index] = 'default';
  }

}
