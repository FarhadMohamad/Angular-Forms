import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchMoviesComponent } from './search/search-movies.component';
import { TvShowDetailsComponent } from './tv-show/tv-showDetails.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

import { MoviesService } from './movies/movies.service';
import { SearchService } from './search/search.service';
import { TvService } from './tv-show/tv.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormPageComponent } from './form-page/form-page.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MoviesComponent },
  { path: 'movie/:id', component: DetailsComponent },
  { path: 'tv/:id', component: TvShowDetailsComponent},
  { path: 'tv-show', component: TvShowComponent },
  {path: 'signUp1', component: TemplateDrivenFormComponent},
  {path: 'signUp', component: FormPageComponent},
  { path: 'search/:query', component: SearchMoviesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    SearchComponent,
    DetailsComponent,
    PageNotFoundComponent,
    SearchMoviesComponent,
    TvShowComponent,
    TvShowDetailsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MoviesService,
    SearchService,
    TvService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
