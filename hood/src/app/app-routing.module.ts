import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './components/posts/posts/posts.component';
import { NeighborhoodComponent } from './components/neighborhood/neighborhood/neighborhood.component';
import { BusinessComponent } from './components/business/business/business.component';

const routes: Routes = [
  {path: 'businesses', component: BusinessComponent},
  {path: 'neighborhoods', component: NeighborhoodComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
