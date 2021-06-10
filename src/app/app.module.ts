import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectPageComponent } from './subject-page/subject-page.component';

import { RouterModule, Routes } from "@angular/router";

const router: Routes = [
  {path: 'home', component: SubjectComponent},
  {path: 'subject', component: SubjectPageComponent},
  {path: 'subject/:title', component: SubjectPageComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubjectComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(router, { enableTracing: false, initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
