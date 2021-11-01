import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { search } from './search';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http :HttpClient) { }

  public getallflight():Observable<search[]>
  {
    return this._http.get<search[]>("http://localhost:8010/getallflights")
  }

  public addflight(search:search):Observable<any> //4 step
  {
    return this._http.post<any>("http://localhost:8010/addflight",search)
  }

  public deleteflight(flightId:any)
  {
    return this._http.delete<any>("http://localhost:8010/del/"+flightId)
  }
  
  public updateflight(flightId:any,flight:search):Observable<any>
  {
    return this._http.post<any>("http://localhost:8010/updateflight/"+flightId,flight)
  }
}
  