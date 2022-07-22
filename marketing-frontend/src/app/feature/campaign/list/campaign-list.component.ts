import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html'
})
export class CampaignListComponent implements OnInit {

  constructor(
    private campaignService: CampaignService
  ) { }

  campaigns: Campaign[] = [];

  ngOnInit(): void {
    this.findAll();
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
      this.campaignService.findByName(term).subscribe(
        (response) => this.campaigns = response
      )
    }

  }

}