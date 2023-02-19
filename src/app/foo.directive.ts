import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appFoo]',
  standalone: true
})
export class FooDirective implements OnInit{

  ngOnInit(): void {
    console.log('FOO');

  }

}
