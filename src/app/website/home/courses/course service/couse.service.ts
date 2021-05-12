import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouseService {

  apiurl = environment.ApiUrl;

  constructor(private http: HttpClient) { }


  getData(url: string) {
    return this.http.get("https://testapi.skilllens.com/api/Admin/allSkills")
  }

  getDataByparm(url: string, p1: any) {
    return this.http.get(`${this.apiurl}${url}`, { params: new HttpParams().set("id", p1) })
  }

}