import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../datasharing/common.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
userData:any;
boolData:boolean= false;
tableHeader:any=['First Name', 'Last Name', 'Email', 'Course', 'Gender', 'Username']
  constructor(private myService: CommonService, private router: Router) {
    this.myService.currentData.subscribe((data)=>{
      console.log(data);
      this.userData= data;
      if(this.userData.length>0)
      this.boolData= true;
    })
   }

  ngOnInit(): void {
  }


  updateDate(dt:any){
    console.log(dt);
    // this data will be passed to service and captred at update component and there
    // we can create reactive form to update the data ang then we can submit the updated data 
    //and lastly will navigate to showdata component.
    this.myService.sendDataToUpdate(dt);
    this.router.navigate(['update']);
  }

  deleteData(dt:any){
    console.log(dt);
    // Show an modal pop to ask for the confirmation. If yes delete the data if no dont delete the data
    // in both cases navigate to show data comp or ramin on the same screen
  }

}
