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

<<<<<<< HEAD
=======
  public deleteById(id: number): Observable<void>{
    console.log(id);
    return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
  }

>>>>>>> 043f0a31ce2efc82b5ac3c1c01d91c4a8188c745
  public findAll():Observable<Prospect[]>{
    return this.http.get<Prospect[]>(this.url+"/findAll", this.httpOptions);
  }

<<<<<<< HEAD

=======
  public findByName(term: string):Observable<Prospect[]>{
    return this.http.get<Prospect[]>(this.url+"/findByName/"+term, this.httpOptions);
  }
>>>>>>> 043f0a31ce2efc82b5ac3c1c01d91c4a8188c745
}
