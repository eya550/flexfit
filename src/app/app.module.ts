import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';
import { DietComponent } from './diet/diet.component';
import { BulkdietComponent } from './bulkdiet/bulkdiet.component';
import { CleandietComponent } from './cleandiet/cleandiet.component';
import { Log2Component } from './log2/log2.component';
import { CompteComponent } from './compte/compte.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Diet1Component } from './diet1/diet1.component';
import { Calories2Component } from './calories2/calories2.component';
import { Calories3Component } from './calories3/calories3.component';
import { Calories4Component } from './calories4/calories4.component';
import { Calories5Component } from './calories5/calories5.component';
import { Workout1Component } from './workout1/workout1.component';
import { Workout2Component } from './workout2/workout2.component';
import { Workout3Component } from './workout3/workout3.component';
import { Workout4Component } from './workout4/workout4.component';
import { FooterComponent } from './footer/footer.component';
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
import { NgxWebstorageModule, SessionStorageService } from 'ngx-webstorage';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    WorkoutComponent,
    DietComponent,
    BulkdietComponent,
    CleandietComponent,
    Log2Component,
    CompteComponent,
    Diet1Component,
    Calories2Component,
    Calories3Component,
    Calories4Component,
    Calories5Component,
    Workout1Component,
    Workout2Component,
    Workout3Component,
    Workout4Component,
    FooterComponent,
    AdminComponent,
    BicepsComponent,
    TricepsComponent,
    PectorauxComponent,
    EpauleComponent,
    AvantComponent,
    AbdosComponent,
    JambesComponent,
    DorseauxComponent,
    Admin1Component,
    EditprofilComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),  ],
    providers: [ApiService,SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
