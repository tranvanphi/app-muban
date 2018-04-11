import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InterceptorModule } from './interceptor.module';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ListCatalogComponent } from './list-catalog/list-catalog.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { ListPostCatelogComponent } from './list-post-catelog/list-post-catelog.component';
import { SlidebarCatelogComponent } from './slidebar-catelog/slidebar-catelog.component';
import { UserServiceService } from './shared/user-service.service';
import { RegisterComponentComponent } from './register-component/register-component.component';

const routes: Routes = [
  {
    path: 'login',
    component: FormLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponentComponent
  },
  {
    path: '',
    component: ListCatalogComponent
  },
  {
    path:'catalog_detalt/:id',
    component: ListPostCatelogComponent
  }
];

  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ListCatalogComponent,
    FormLoginComponent,
    ListPostCatelogComponent,
    SlidebarCatelogComponent,
    RegisterComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorModule,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
