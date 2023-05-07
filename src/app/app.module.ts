import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './presentation/posts/posts.component';
import { DataModule } from '@data/data.module';

@NgModule({
  declarations: [AppComponent, PostsComponent],
  imports: [BrowserModule, AppRoutingModule, DataModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
