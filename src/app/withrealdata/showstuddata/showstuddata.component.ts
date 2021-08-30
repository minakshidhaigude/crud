import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-showstuddata',
  templateUrl: './showstuddata.component.html',
  styleUrls: ['./showstuddata.component.css']
})
export class ShowstuddataComponent implements OnInit {

  studentData:any;
  constructor(private comm: CommService, private router: Router) {
    this.comm.getRealData().subscribe((dt)=>{
      console.log(dt);
      this.studentData=dt;
    })
   }

  ngOnInit(): void {
  }


  updateData(studId:any){
    console.log(studId); 
    this.router.navigate(['update/'+studId]);
  }

  deleteData(id:any){
    console.log(id);
    this.comm.deleteStudData(id).subscribe((dt)=>{
      console.log(dt);
      location.reload();
    })

        
  }
}
