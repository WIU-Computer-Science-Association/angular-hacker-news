import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { HackerNews } from './services/hackernews.service';
import { TimelineComponent } from './home/timeline/timeline.component';
import { NewsItemComponent } from './home/timeline/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TimelineComponent,
    NewsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HackerNews
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
