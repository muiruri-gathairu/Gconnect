import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from '../app.component';
import { AboutComponent } from '../about/about.component';
import {UserComponent} from '../user/user.component';
import {RepositoryComponent} from '../repository/repository.component';
// Defining routes
const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'repository', component: RepositoryComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
