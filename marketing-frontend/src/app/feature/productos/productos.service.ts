import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Productos } from "./productos";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService{



  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8090/api/productos"

  //create
  public save(productos:Productos): Observable<Productos>{
    return this.http.post<Productos>(this.url+"/save",productos, this.httpOptions);
  }

  //read
  public findById(productoId:number): Observable<Productos>{
    return this.http.get<Productos>(this.url+"/findById/"+productoId, this.httpOptions);
  }

  public deleteById(id: number): Observable<void>{
    console.log(id);
    return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
  }

  public findAll():Observable<Productos[]>{
    return this.http.get<Productos[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByNombre(term: string):Observable<Productos[]>{
    return this.http.get<Productos[]>(this.url+"/findByName/"+term, this.httpOptions);
  }


}
