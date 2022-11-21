import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { NavListComponent } from './nav-list/nav-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewWorkoutPageComponent } from './view-workout-page/view-workout-page.component';
import { CreateNewPageComponent } from './create-new-page/create-new-page.component';
import { WorkoutParamsComponent } from './workout-params/workout-params.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { WorkoutViewComponent } from './workout-view/workout-view.component';
import { WorkoutTableComponent } from './workout-table/workout-table.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavListComponent,
    PageNotFoundComponent,
    ViewWorkoutPageComponent,
    CreateNewPageComponent,
    WorkoutParamsComponent,
    ExerciseListComponent,
    WorkoutViewComponent,
    WorkoutTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
