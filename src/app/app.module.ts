import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Skill } from './component/skill/skill.component';
import { Project } from './component/project/project.component';
import { Certification } from './component/certification/certification.component';
import { routing } from './app.routing';
import { CompetencyDetailsComponent } from './component/competency-details/competency-details.component';
import {ProfileComponent} from './component/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    Skill,
    Project,
    Certification,
    CompetencyDetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
