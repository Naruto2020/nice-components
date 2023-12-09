import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';

/** on provide PostsService dans ce module car il n'est pas fait a la racine et ne servira 
 * que dans le module SocialMedia il ne sera chargé que si le module auquel il est lié est appelé  */

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    SharedModule,
  ],
  providers: [PostsService, PostsResolver]
})
export class SocialMediaModule { }
