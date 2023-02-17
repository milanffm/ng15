
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'todos',
    title: 'Todos Page',
    providers: [
      {
        provide: 'Angular',
        useValue: 'v14',
      },
    ],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./app/todos-page/todos-page.component').then((m) => m.TodosPageComponent),
      },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(RouterModule.forRoot(routes))]
}).catch(err => console.error(err));
