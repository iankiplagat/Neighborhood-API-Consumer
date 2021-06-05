import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { NeighborhoodComponent } from './components/neighborhood/neighborhood/neighborhood.component';
import { BusinessComponent } from './components/business/business/business.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},

  {path: 'homepage', component: HomepageComponent},
  {path: 'businesses', component: BusinessComponent},
  {path: 'neighborhoods', component: NeighborhoodComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'about', component: AboutComponent},

  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
