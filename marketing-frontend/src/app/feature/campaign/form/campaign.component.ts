import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html'
})
export class CampaignComponent implements OnInit {

  currentCampaign: Campaign = {
    campaniaId: 0,
    promocionId: 0,
    medioPublicitar: "",
    fechaInicio:new Date(),
    fechaFinal:new Date(),
    created:new Date(),
    updated:new Date(),
    enable: false
  };

  constructor(
    private campaignService: CampaignService,
    private activedRoute: ActivatedRoute
  ) { }

  campaigns: Campaign[] = [];

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params)=>{
        let campaniaId:string="";
        if (params.get("id")){
          campaniaId = params.get("id")!;
          this.findById(parseInt(campaniaId));
        }
      }
    )
  }

  save(): void {
    this.campaignService.save(this.currentCampaign)
    .subscribe(
      (response) => {
        console.log("registro guardado");
        this.currentCampaign = {
          campaniaId: 0,
          promocionId: 0,
          medioPublicitar: "",
          fechaInicio:new Date(),
          fechaFinal:new Date(),
          created:new Date(),
          updated:new Date(),
          enable: false
        }
      }
    )
  }

  findById(campaniaId: number): void{
    this.campaignService.findById(campaniaId)
    .subscribe(
      (response: Campaign) => {
        console.log("registro encontrado");
        this.currentCampaign=response
      }
    )
  }
  findAll():void {
    this.campaignService.findAll().subscribe(
      (response) => {
        this.campaigns = response;
      }
    );
  }

  findByName(term: string){
    if (term.length===0){
      this.findAll();
    }

    if (term.length>=2){
      this.campaignService.findByMedioPublicitar(term).subscribe(
        (response) => this.campaigns = response
      )
    }

  }
}
