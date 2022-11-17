import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewPageComponent } from './create-new-page/create-new-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewWorkoutPageComponent } from './view-workout-page/view-workout-page.component';

const routes: Routes = [{
  path: 'create-new',
  component: CreateNewPageComponent
},
{
  path: 'view-workout',
  component: ViewWorkoutPageComponent
},
{
  path: '',
  redirectTo: '/create-new',
  pathMatch: 'full'
},
{
  path: '**',
  component: PageNotFoundComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
