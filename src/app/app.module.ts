import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';

const routes: Routes = [
  { path: 'portfolio-list', component: ProjectsListComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    AccomplishmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
