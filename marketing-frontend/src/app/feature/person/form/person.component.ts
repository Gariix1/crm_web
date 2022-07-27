import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import{Person}from '../person';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
 currentPerson:Person={
  id:0,
  name:"",
  dni:"",
  enable:false
}
  constructor(
    private personService:PersonService,
    private activedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params)=>{
        let  id:string ="";
        if(params.get("id")){
          id = params.get("id")!;
          this.findById(parseInt(id));
        }
      }
    )
  }


   save():void{
    this.personService.save(this.currentPerson)
    .subscribe(
      (response) => {
        console.log("Registro guardar");
        this.currentPerson = {
          id:0,
          name: "",
          dni:"",
          enable:false
        }
      }
    )
   }


   findById(id:number):void{
    this.personService.findById(id)
    .subscribe(
      (response: Person)=>{
        this.currentPerson = response;
      }
    )
   }


}


/* id: 0,
name: '' */