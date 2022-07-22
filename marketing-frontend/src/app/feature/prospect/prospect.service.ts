import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Prospect } from "./prospect";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8090/api/prospect"

  constructor(
    private http: HttpClient
  ) { }

  //create
  public save(prospect:Prospect): Observable<Prospect>{
    return this.http.post<Prospect>(this.url+"/save",prospect, this.httpOptions);
  }

  //read
  public findById(prospectId:number): Observable<Prospect>{
    return this.http.get<Prospect>(this.url+"/"+prospectId, this.httpOptions);
  }

  public findAll():Observable<Prospect[]>{
    return this.http.get<Prospect[]>(this.url+"/findAll", this.httpOptions);
  }


}
