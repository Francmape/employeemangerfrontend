import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { SpokenLanguagesComponent } from './spoken-languages/spoken-languages.component';


const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'spoken', component: SpokenLanguagesComponent },
  { path: 'programming', component: ProgrammingLanguagesComponent },
  { path: 'employee', component: EmployeesComponent },
  //Wildcard must go last
  { path: '**', component: PageNotFoundComponent }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
