import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessComponent } from './components/business/business/business.component';
import { NeighborhoodComponent } from './components/neighborhood/neighborhood/neighborhood.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilesComponent } from './components/profiles/profiles/profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    NeighborhoodComponent,
    PostsComponent,
    AboutComponent,
    NotFoundComponent,
    HomepageComponent,
    NavbarComponent,
    ProfilesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
