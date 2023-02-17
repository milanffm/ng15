import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appFoo]',
  standalone: true
})
export class FooDirective implements OnInit{

  constructor() { }
  ngOnInit(): void {
    console.log('FOO');

  }

}
