import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DietComponent } from './diet/diet.component';
import { BulkdietComponent } from './bulkdiet/bulkdiet.component';
import { CleandietComponent } from './cleandiet/cleandiet.component';
import { WorkoutComponent } from './workout/workout.component';
import { Log2Component } from './log2/log2.component';
import { CompteComponent } from './compte/compte.component';
import { AdminComponent } from './admin/admin.component';
import { BicepsComponent } from './biceps/biceps.component';
import { TricepsComponent } from './triceps/triceps.component';
import { PectorauxComponent } from './pectoraux/pectoraux.component';
import { EpauleComponent } from './epaule/epaule.component';
import { AvantComponent } from './avant/avant.component';
import { AbdosComponent } from './abdos/abdos.component';
import { JambesComponent } from './jambes/jambes.component';
import { DorseauxComponent } from './dorseaux/dorseaux.component';
import { Admin1Component } from './admin1/admin1.component';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { Header2Component } from './header2/header2.component';


const routes: Routes = [
  {path:'bulkdiet',component:BulkdietComponent},
  {path:'cleandiet',component:CleandietComponent},
  {path:'diet',component:DietComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'log2',component:Log2Component},
  {path:'workout',component:WorkoutComponent},
  {path:'admin',component:AdminComponent},
  {path:'biceps',component:BicepsComponent},
  {path:'triceps',component:TricepsComponent},
  {path:'pectoraux',component:PectorauxComponent},
  {path:'epaule',component:EpauleComponent},
  {path:'avant',component:AvantComponent},
  {path:'abdos',component:AbdosComponent},
  {path:'jambes',component:JambesComponent},
  {path:'dorseaux',component:DorseauxComponent},
  {path:'admin1',component:Admin1Component},
  {path:'editprofil',component:EditprofilComponent},
  {path:'compte',component:CompteComponent},
  {path:'header2',component:Header2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
