import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-toolbar',
  templateUrl: './campaign-toolbar.component.html'
})
export class CampaignToolbarComponent implements OnInit {

  constructor() { }

  @Output() term = new EventEmitter<string>();

  @Input() item: string= "";

  ngOnInit(): void {
  }

  onInput(inputTerm: string):void {
    this.term.emit(inputTerm);
  }

}