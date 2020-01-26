import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { END_POINT, HEADERS } from '../config/config';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  public loadMe():Observable<User>{

    return this.http.get<User>(END_POINT + '/user' + '/me', {headers: HEADERS});
  }

  public getCoins(amount: number){
    
    let body = {
      amount: amount
    }

    return this.http.post(END_POINT + '/user' + '/points',body,{headers: HEADERS});
  }
}
