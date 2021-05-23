import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { AppErrorComponent } from './app-error/app-error.component';
import { SubscriberGuard } from './subscriber.guard';
import { AuthGuard } from './auth.guard';
import { UnsavedGuard } from './unsaved.guard';
import { TFFormsComponent } from './tfforms/tfforms.component';
import { RFFormsComponent } from './rfforms/rfforms.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    AboutusComponent,
    ContactusComponent,
    BlogComponent,
    BlogPostComponent,
    AppErrorComponent,
    TFFormsComponent,
    RFFormsComponent
  ],
  providers: [AuthenticatorResponse, SubscriberGuard, AuthGuard, UnsavedGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
