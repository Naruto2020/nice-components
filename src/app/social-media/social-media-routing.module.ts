import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsResolver } from './resolvers/posts.resolver';

const routes: Routes = [
  /* chaque fois que la route /social-media est appelé, le resolver est aussi 
  appelé en premier pour recupérer les données de l'api avant d'afficher le composant  */

  {path:'', component: PostListComponent, resolve: {posts: PostsResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }
