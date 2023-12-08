import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // lazy loading pour la route social-media (pointe vers toutes les routes du module social-media)
  {path: 'social-media', loadChildren: () => import('./social-media/social-media.module').then(m => m.SocialMediaModule)},
  {path: '**', redirectTo: 'social-media'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
