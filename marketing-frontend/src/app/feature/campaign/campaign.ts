import { CampaignProspect } from "./CampaignProspect"

export interface Campaign {
  campaniaId: number,
  promocionId: number,
  medioPublicitar: string,
  fechaInicio: Date,
  fechaFinal: Date,
  created: Date,
  updated: Date,
  enable: boolean
  creadoPor: number,
  prospects: CampaignProspect[]


}
