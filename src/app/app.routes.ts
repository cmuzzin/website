import { Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'career',
        component: CareerComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    }
];
