import { NgModule } from '@angular/core';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SiderbarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  exports:[
    HeaderComponent,
    SiderbarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ]
})
export class SharedModule { }