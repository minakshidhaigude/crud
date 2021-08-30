import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  constructor(private http: HttpClient) { }
// Get all student data
  getRealData(){
    return this.http.get('http://localhost:8080/DemoApplication/userData/enlist');
  }
  // insert perticular student data
  inserData(frm:any){
    return this.http.post('http://localhost:8080/DemoApplication/userData/info', frm);
  }

  // get perticular student data
  getStudData(studId:any){
    let url='http://localhost:8080/DemoApplication/userData/'+studId;
    return this.http.get(url);
  }

  deleteStudData(studId:any){
    let url= 'http://localhost:8080/DemoApplication/userData/'+studId;
    return this.http.delete(url);
  }

  updateStudData(fromData:any, _id:any){
    let url='http://localhost:8080/DemoApplication/userData/'+_id;
    return this.http.put(url, fromData);
  }

}
