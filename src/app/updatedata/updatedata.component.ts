import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../datasharing/common.service';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {
  dataFromShowData:any;
  updateForm:any= FormGroup;
  allUserData:any;
  courses=['Engineering','Medical', 'Law', 'Architecture', 'Leturature', 'MSW'];
  constructor( private mySer: CommonService, private fb: FormBuilder, private router:Router) {
    this.mySer.currentData.subscribe((data)=>{
      this.allUserData= data;
      console.log(this.allUserData);
    })
    


    this.mySer.perUserUpdateData.subscribe((dt)=>{
      this.dataFromShowData= dt;
      console.log(this.dataFromShowData);
      this.updateForm = this.fb.group({
        firstname:[{value:this.dataFromShowData.firstname, disabled:true}, [Validators.required, Validators.min(1)]],
        lastname:[{value:this.dataFromShowData.lastname, disabled:true},[Validators.required, Validators.minLength(5)]],
        email:[{value:this.dataFromShowData.email, disabled:true},[Validators.required]],
        selectedCourse:[this.dataFromShowData.selectedCourse,[Validators.required]],
        gender:[{value:this.dataFromShowData.gender, disabled:true},[Validators.required]],
        username:[this.dataFromShowData.username,[Validators.required]],
        password:[this.dataFromShowData.password,[Validators.required]]
      })
    })
  }

  ngOnInit(): void {
  }

  get getControl(){
    //alternate way
    // this.updateForm.controls['firstname', 'lastname','email', 'gender'].disabled();
    return this.updateForm.controls;
  }

  onUpdate(){
    console.log(this.updateForm.value);
    console.log(this.allUserData);

    for (let i = 0; i < this.allUserData.length; i++) {
      // console.log(this.allUserData[i].lastname);
        if(this.allUserData[i].firstname== this.dataFromShowData.firstname && 
          this.allUserData[i].lastname==this.dataFromShowData.lastname &&
          this.allUserData[i].email== this.dataFromShowData.email &&
          this.allUserData[i].gender== this.dataFromShowData.gender){

            this.allUserData[i].selectedCourse= this.updateForm.value.selectedCourse;
            this.allUserData[i].username= this.updateForm.value.username;
            this.allUserData[i].password= this.updateForm.value.password;
          }

          this.mySer.updateUserData(this.allUserData);

          this.router.navigate(['show']);
      
    }
    
  }

}
// Inser Data ==> Show data using service==> select one user data and click on update==> update comp catch the perticular user data as well as recieve all user data so that I can update the selected user data.
// Lastly I have shared update all user data to show data component through the service and displayed on show data comp.
// to delete data: 
// Inside show data open modal to ask confirmation, if yes then by checking the condition like firstname, lastname remove the element from array show that it will delete the data for perticular user.