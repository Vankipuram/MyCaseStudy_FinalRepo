import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http :HttpClient) { }

  //Here i am calling rest api from java using httpclient

  public loginuserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8006/login",user)
      }
      public registerUserFromRemote(user :User):Observable<any>{
        return this._http.post<any>("http://localhost:8006/register",user)
      }
}
