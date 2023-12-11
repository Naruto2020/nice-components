import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UserNamePipe } from './pipes/userName.pipe';
import { TimeAgoPipe } from './pipes/timeAgo.pipe';
import { HighlightDirective } from './directives/highlight.directtive';

/*  NB on a pas besoins de MatToolbarModule dans le shared d'ou 
le fait qu'on l'exporte directement afin de l'utiliser dans toute l'app */

@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipe,
    UserNamePipe,
    TimeAgoPipe,
    HighlightDirective

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule,
    ShortenPipe,
    UserNamePipe,
    TimeAgoPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
