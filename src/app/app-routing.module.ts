import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { InsertformComponent } from './withrealdata/insertform/insertform.component';
import { ShowstuddataComponent } from './withrealdata/showstuddata/showstuddata.component';
import { UpdatestuddataComponent } from './withrealdata/updatestuddata/updatestuddata.component';

const routes: Routes = [
  // {path: '', component: InsertdataComponent},
  // {path: 'show', component: ShowdataComponent},
  // {path: 'update', component: UpdatedataComponent},
  {path:'', component: InsertformComponent},
  {path:'show', component: ShowstuddataComponent },
  {path:'update/:id', component: UpdatestuddataComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
