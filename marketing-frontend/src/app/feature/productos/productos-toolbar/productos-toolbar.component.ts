import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productos-toolbar',
  templateUrl: './productos-toolbar.component.html'
})
export class ProductosToolbarComponent implements OnInit {

  constructor() { }

  @Output() term = new EventEmitter<string>();

  @Input() item: string= "";

  ngOnInit(): void {
  }

  onInput(inputTerm: string):void {
    this.term.emit(inputTerm);
  }

}

