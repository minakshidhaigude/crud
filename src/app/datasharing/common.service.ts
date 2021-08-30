import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // To get the inserted data from insert data comp.
  initialData:any=[]
  private userData = new BehaviorSubject(this.initialData);
  currentData = this.userData.asObservable();

// to get/share update data to share at update comp.
perUserDt:any= [];
private perUserData = new BehaviorSubject(this.perUserDt);
perUserUpdateData = this.perUserData.asObservable();

  constructor() { }

  updateUserData(userArr:any){
    this.userData.next(userArr);
  }

  sendDataToUpdate(userDt:any){
    this.perUserData.next(userDt);
  }
}
