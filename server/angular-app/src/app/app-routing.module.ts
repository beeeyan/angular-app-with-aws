import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailformComponent } from './detailform/detailform.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'questionnaire', component: QuestionnaireComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detailform', component: DetailformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
