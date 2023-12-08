import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

/*  NB on a pas besoins de MatToolbarModule dans le shared d'ou 
le fait qu'on l'exporte directement afin de l'utiliser dans toute l'app */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatToolbarModule
  ]
})
export class SharedModule { }
