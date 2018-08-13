import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GitSearchService } from './git-search.service';
import { GitUsersService } from './git-users.service';
import { GitSearchComponent } from './git-search/git-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
const appRoutes: Routes = [
  { path: '',
    component: HomePageComponent
  },
  { path: 'search',
    redirectTo: '/search/angular/0',
    pathMatch: 'full'
  },
  {
    path: 'search/:query',
    redirectTo: '/search/:query/1',
    pathMatch: 'full'
  },
  {
    path: 'search/:query/:page',
    component: GitSearchComponent,
    data: { title: 'Git Search' }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GitSearchService, GitUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
