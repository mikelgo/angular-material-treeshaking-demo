import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-comp-all',
  template: `<button mat-button>Hi from all modules</button>`,
  styles: [],
})
export class MyCompComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
