import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactTableService {

  constructor(private http:HttpClient) { }

  // all details
  allDetails(){
    return this.http.get('https://dummyjson.com/users')
  }
}
