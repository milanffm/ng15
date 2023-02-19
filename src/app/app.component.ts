import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FooDirective } from './foo.directive';

@Component({
  selector: 'app-root',
  template: `
     <a routerLink="/">home</a>
     <a routerLink="/todos">todo</a>
     <div appFoo>Foo</div>
     <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [FooDirective, CommonModule, RouterModule, RouterOutlet],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
