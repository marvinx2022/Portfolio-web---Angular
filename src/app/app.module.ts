import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { StudiesComponent } from '../studies/studies.component';
import { WorkComponent } from '../work/work.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, FooterComponent, HeaderComponent, ProjectsComponent, SkillsComponent, StudiesComponent, WorkComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
