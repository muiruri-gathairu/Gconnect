import { SearchService } from './search-service/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { DateCountPipe } from './date-count.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing/routing.module';


const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'repository', component: RepositoryComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    UserComponent,
    SearchFormComponent,
    AboutComponent,
    DateCountPipe,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
