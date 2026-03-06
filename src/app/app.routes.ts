import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProjectDetailsComponent } from './features/projects/project-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: '**', redirectTo: '' },
];
