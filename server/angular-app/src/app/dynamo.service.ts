import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Questionnaire } from './questionnaire';

@Injectable({
  providedIn: 'root'
})
export class DynamoService {

  private host: string = "dummy"

  httpOption = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  addDynamoDB(questionnaire: Questionnaire): Promise<boolean> {
    return this.http.put(this.host, questionnaire, this.httpOption)
    .toPromise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    })
  }

  getDynamoDB():  Promise<boolean> {
    return this.http.get(this.host, this.httpOption)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(() => {
      console.log("失敗")
    })
  }


}
