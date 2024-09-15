import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { FooterModule } from './components/footer/footer.module';
import { HomeModule } from './pages/home/home.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeModule,
    FooterModule,
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
