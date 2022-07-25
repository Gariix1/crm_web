import { Component, OnInit } from '@angular/core';
import { ProspectService } from './../prospect.service';
import { Prospect } from '../prospect';
@Component({
  selector: 'app-prospect-list',
  templateUrl: './prospect-list.component.html'

})
export class ProspectListComponent implements OnInit {

  constructor(private prospectService: ProspectService) {

   }
   prospects: Prospect[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.prospectService.findAll().subscribe(
      (response) => {
        this.prospects = response;
      }
    );
  }

  findByNombre(term: string){
    if (term.length===0){
      this.findAll();
    }

    if (term.length>=2){
      this.prospectService.findByNombre(term).subscribe(
        (response) => this.prospects = response
      )
    }

  }

}
