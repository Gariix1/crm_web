import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Campaign } from "./campaign";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CampaignService{

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8090/api/campaign"

  constructor(
    private http: HttpClient
  ) { }

  //create
  public save(campaign:Campaign): Observable<Campaign>{
    return this.http.post<Campaign>(this.url+"/save",campaign, this.httpOptions);
  }

  //read
  public findById(campaniaId:number): Observable<Campaign>{
    return this.http.get<Campaign>(this.url+"/"+campaniaId, this.httpOptions);
  }

  public deleteById(id: number): Observable<void>{
    console.log(id);
    return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
  }

  public findAll():Observable<Campaign[]>{
    return this.http.get<Campaign[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term: string):Observable<Campaign[]>{
    return this.http.get<Campaign[]>(this.url+"/findByName/"+term, this.httpOptions);
  }


}
