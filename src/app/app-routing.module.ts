import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppErrorComponent } from './app-error/app-error.component';
import { AuthGuard } from './auth.guard';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ResolveExGuard } from './resolve-ex.guard';
import { RFFormsComponent } from './rfforms/rfforms.component';
import { SubscriberGuard } from './subscriber.guard';
import { TFFormsComponent } from './tfforms/tfforms.component';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [
  // {
  //   path: '**',
  //   redirectTo: 'error'
  // },
  // {
  //   path: 'error',
  //   children: [
  //     {
  //       path: 'error/:err',
  //       component: AppErrorComponent
  //     }
  //   ]
  // },
  // {
  //   path: 'home',
  //   redirectTo: 'error',
  //   pathMatch: 'full'
  // },
  {
    path: 'aboutus',
    component: AboutusComponent,
    canDeactivate: [UnsavedGuard],
    resolve: {
      data: ResolveExGuard
    }
  },
  {
    path: 'blog',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BlogComponent
      },
      {
        path: '',
        canActivateChild: [SubscriberGuard],
        children: [
          {
            path: 'blog/:postId',
            component: BlogPostComponent
          }
        ]
      }
    ]
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'forms',
    children: [
      { path: '', component: TFFormsComponent},
      { path: 'rforms', component: RFFormsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
