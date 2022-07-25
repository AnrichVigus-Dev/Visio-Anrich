import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavComponent } from './nav/nav.component';
import { DescriptionComponent } from './description/description.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FundsComponent } from './funds/funds.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavComponent,
    DescriptionComponent,
    ButtonsComponent,
    FundsComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
