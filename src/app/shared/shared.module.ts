import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';

/*  NB on a pas besoins de MatToolbarModule dans le shared d'ou 
le fait qu'on l'exporte directement afin de l'utiliser dans toute l'app */

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommentsComponent,
    MaterialModule
  ]
})
export class SharedModule { }
