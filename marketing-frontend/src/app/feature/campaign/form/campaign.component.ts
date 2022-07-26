import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProspectService } from '../../prospect/prospect.service';
import { Prospect } from '../../prospect/prospect';
import { CampaignProspect } from '../CampaignProspect';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html'
})
export class CampaignComponent implements OnInit {

  currentCampaign: Campaign = {
    campaniaId: 0,
    promocionId: 0,
    medioPublicitar: "",
    fechaInicio: new Date(),
    fechaFinal: new Date(),
    created: new Date(),
    updated: new Date(),
    enable: false,
    creadoPor: 0,
    prospects: []
  };

  constructor(
    private campaignService: CampaignService,
    private activedRoute: ActivatedRoute,
    private route: Router,
    private prospectService: ProspectService
  ) { }

  campaigns: Campaign[] = [];

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let campaniaId: string = "";
        if (params.get("id")) {
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
            fechaInicio: new Date(),
            fechaFinal: new Date(),
            created: new Date(),
            updated: new Date(),
            enable: false,
            creadoPor: 0,
            prospects: []

          }
        }
      )
  }

  findById(campaniaId: number): void {
    this.campaignService.findById(campaniaId)
      .subscribe(
        (response: Campaign) => {
          console.log("registro encontrado");
          this.currentCampaign = response;
          this.currentCampaign.prospects.forEach(
            (item) => {
              this.prospectService.findById(item.prospectId).subscribe(
                (pros: Prospect) => item.name = pros.nombre
              )

            }
          )
        }
      )
  }

  delete(): void {
    this.campaignService.deleteById(this.currentCampaign.campaniaId)
      .subscribe(
        () => {
          console.log("Registro eliminado");
          this.currentCampaign = this.resetCampaign();
        }
      )
  }


  resetCampaign() {
    return this.currentCampaign = {
      campaniaId: 0,
      promocionId: 0,
      medioPublicitar: "",
      fechaInicio: new Date(),
      fechaFinal: new Date(),
      created: new Date(),
      updated: new Date(),
      enable: false,
      creadoPor: 0,
      prospects: []
    };
  }

  onSelect(prospect: Prospect): void {
    console.log(prospect);
    let campaignProspect: CampaignProspect = { campaignId: this.currentCampaign.campaniaId, id: 0, name: prospect.nombre, prospectId: prospect.prospectoId }
    this.currentCampaign.prospects.push(campaignProspect);
  }


  findAll(): void {
    this.campaignService.findAll().subscribe(
      (response) => {
        this.campaigns = response;
      }
    );
  }

  removeProspect(id: number) {
    this.currentCampaign.prospects =
      this.currentCampaign.prospects.filter(
        (item) => item.prospectId != id
      )
  }

  findByName(term: string) {
    if (term.length === 0) {
      this.findAll();
    }

    if (term.length >= 2) {
      this.campaignService.findByMedioPublicitar(term).subscribe(
        (response) => this.campaigns = response
      )
    }

  }
}
