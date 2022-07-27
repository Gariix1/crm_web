import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Prospect } from '../prospect';
import { ProspectService } from '../prospect.service';

@Component({
  selector: 'app-prospect-search',
  templateUrl: './prospect-search.component.html'
})
export class ProspectSearchComponent implements OnInit {

  constructor(
    private prospectService: ProspectService
  ) { }

  @Output() prospectEmiter = new EventEmitter<Prospect>();
  prospects: Prospect[] = [];

  ngOnInit(): void {
  }

  findByName(term: string):void {

    if (term.length>=2){
      this.prospectService.findByName(term).subscribe(
        (response) => {
          console.log(term + " "+ response);
          this.prospects = response
        }
      )
    }
    if (term.length===0){
      this.prospects = [];
    }

  }

  onSelect(prospect: Prospect): void{
    this.prospectEmiter.emit(prospect);
  }

}
