import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-updatestuddata',
  templateUrl: './updatestuddata.component.html',
  styleUrls: ['./updatestuddata.component.css']
})
export class UpdatestuddataComponent implements OnInit {
  singleStudData:any;
  updateForm:any= FormGroup;
  courses=['Engineering','Medical', 'Law', 'Architecture', 'Leturature', 'MSW'];
  
  constructor(private actRoute: ActivatedRoute, private comm: CommService, private fb: FormBuilder,
    private router:Router) { 
    //to recieve the route param data
    let studId= this.actRoute.snapshot.params.id;
    console.log(studId);

    // passed above id to database or API call to get the details of that student
    this.comm.getStudData(studId).subscribe((dt)=>{
      this.singleStudData= dt;
      console.log(this.singleStudData)
    })

  }

  ngOnInit(): void {
    // prepare the reactive form to update the data
    this.updateForm = this.fb.group({
      firstName:['', [Validators.required, Validators.min(1)]],
      lastName:['',[Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required]],
      contactNo:['',[Validators.required]],
      course:['',[Validators.required]],
      gender:['',[Validators.required]],
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
    // As subscriber is taking time to load the data we are pathcing the values after 2 sec 
    //so that fetched values will be displayed in the reactive form fields
    setTimeout(() => {
      this.updateForm.patchValue(this.singleStudData)
    }, 2000);
   
  }

  get getControl(){
    return this.updateForm.controls;
  }

  onUpdate(){
    // once we get the updated form we need to pass the form with that student id so we have taken id from
    // constructor bcoz from the form we are not getting the id.
    //and that id along with form we are passing to the update API 
    //so we are getting the successful message on completion of update.
    let studData= this.updateForm.value;
    console.log(studData)
    this.comm.updateStudData(studData, this.singleStudData.id).subscribe((dt)=>{
      console.log(dt);
      this.router.navigate(['show']);
    })
  }

  

}
