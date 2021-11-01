import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightBookRequest } from './flight-book-request';
import { search } from './search';


@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  constructor(private _http :HttpClient) { }

  public searchFlightFromRemote(flightFrom:any,flightTo:any,date:any):Observable<any>{
    return this._http.get<search[]>("http://localhost:8010/showflights/"+flightFrom+"/"+flightTo+"/"+date)
  }
  public saveUserDetails(flightbook:FlightBookRequest):Observable<any>{
    return this._http.post<any>("http://localhost:8004/user",flightbook)
  }
  public searchUserDetails(email:any):Observable<any>{
    return this._http.get<FlightBookRequest[]>("http://localhost:8004/userdetails/"+email)
  }
  public deleteUserDetails(email:any):Observable<any>{
    return this._http.delete<any>("http://localhost:8004/deleteUser/"+email)
  }
}
