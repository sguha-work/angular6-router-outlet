import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Skill } from './component/skill/skill.component';
import { Project } from './component/project/project.component';
import { Certification } from './component/certification/certification.component';
import {CompetencyDetailsComponent} from './component/competency-details/competency-details.component';
import {ProfileComponent} from './component/profile/profile.component';

const appRoutes: Routes = [
    
    //Site routes goes here 
    
    {path:'competency',component:CompetencyDetailsComponent},
    {path:'profile',component:ProfileComponent, children: [
        {path:'',component:Skill, outlet: 'profileOutlet'},
        {path:'skill',component:Skill, outlet: 'profileOutlet'},
        {path:'project',component:Project, outlet: 'profileOutlet'},
        {path:'certifications',component:Certification, outlet: 'profileOutlet'},
    ]},
      
    // App routes goes here here
   
];

export const routing = RouterModule.forRoot(appRoutes);