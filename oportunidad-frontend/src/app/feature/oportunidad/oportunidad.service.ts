import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Oportunidad } from "./oportunidad";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OportunidadService{

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8090/api/oportunidad"

  constructor(
    private http: HttpClient
  ) { }

  //create
  public save(oportunidad:Oportunidad): Observable<Oportunidad>{
    return this.http.post<Oportunidad>(this.url+"/save",oportunidad, this.httpOptions);
  }

  //read
  public findById(oportunidadId:number): Observable<Oportunidad>{
    return this.http.get<Oportunidad>(this.url+"/"+oportunidadId, this.httpOptions);
  }
}
