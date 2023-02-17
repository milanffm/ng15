
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TodosPageComponent } from './app/todos-page/todos-page.component';
const routes: Routes = [{
  path: 'todos',
  component: TodosPageComponent
}]

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(RouterModule.forRoot(routes))]
}).catch(err => console.error(err));
