import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubjectComponent } from './subject/subject.component';

import { RouterModule, Routes } from "@angular/router";
import { BlankComponent } from './blank/blank.component';

const router: Routes = [
  {path: 'home', component: SubjectComponent},
  {path: 'blank-for-reload', component: BlankComponent},
  {path: 'test', component: HeaderComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubjectComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router,{enableTracing:false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
