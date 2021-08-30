import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-insertform',
  templateUrl: './insertform.component.html',
  styleUrls: ['./insertform.component.css']
})
export class InsertformComponent implements OnInit {
  userForm:any= FormGroup;
  courses=['Engineering','Medical', 'Law', 'Architecture', 'Leturature', 'MSW'];
  constructor(private fb: FormBuilder,
              private comm: CommService,
              private route: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName:['', [Validators.required, Validators.min(1)]],
      lastName:['',[Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required]],
      contactNo:['',[Validators.required]],
      course:['',[Validators.required]],
      gender:['',[Validators.required]],
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  get getControl(){
    return this.userForm.controls;
  }

  onSubmit(){
    console.log(this.userForm.value);
    this.comm.inserData(this.userForm.value).subscribe((dt)=>{
      console.log(dt);
    })
  }

}
