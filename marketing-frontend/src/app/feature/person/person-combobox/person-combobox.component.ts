import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../person';
import { PersonService } from './../person.service';

@Component({
  selector: 'app-person-combobox',
  templateUrl: './person-combobox.component.html',

})
export class PersonComboboxComponent implements OnInit {

  persones:Person[] = [];
  constructor(
    private personService:PersonService
  ) { }

  @Output() currentPersonId = new EventEmitter<number>();
  @Input() idInput: number = 0;


  ngOnInit(): void {
    this.findAll();
  }
  findAll():void{
    this.personService.findAll().subscribe(
      (response) => this.persones = response
    )
  }

  onChange(value : string):void{
    this.currentPersonId.emit(parseInt (value));
  }
}
