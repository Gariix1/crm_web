import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Productos } from "./productos";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService{

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8090/api/productos"

  constructor(
    private http: HttpClient
  ) { }

  //create
  public save(productos:Productos): Observable<Productos>{
    return this.http.post<Productos>(this.url+"/save",productos, this.httpOptions);
  }

  //read
  public findById(productoId:number): Observable<Productos>{
    return this.http.get<Productos>(this.url+"/"+productoId, this.httpOptions);
  }
}
