import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../datasharing/common.service';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css']
})
export class InsertdataComponent implements OnInit {

  userForm:any= FormGroup;
  courses=['Engineering','Medical', 'Law', 'Architecture', 'Leturature', 'MSW'];
  arrData:any =[];
  constructor(private fb: FormBuilder,
             private myservice: CommonService,
             private route: Router,
             private http:HttpClient) {   }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstname:['', [Validators.required, Validators.min(1)]],
      lastname:['',[Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required]],
      selectedCourse:['',[Validators.required]],
      gender:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  get getControl(){
    return this.userForm.controls;
  }

  onSubmit(){
    console.log(this.userForm.value);
    this.arrData.push(this.userForm.value);
    console.log(this.arrData);
    this.userForm.reset();

    this.myservice.updateUserData(this.arrData);

    // this.route.navigate(['show']);
    
  }

}
